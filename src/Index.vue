<template lang='pug'>
.main(:class="{'main--withSidebar': showSidebar}")
  .main__body(v-show="modalOpenedDesktop || !isModalOpened()", :class="{'main__body--modalOpened': modalOpenedDesktop}")
    .main__leftSide(:class="`main__leftSide--${(showSidebar) ? 'shown' : 'hidden'}`")
      Sidebar.main__sidebar(v-scrollbar="")
      Toolbar.main__toolbar
    .main__content(:class="{'main__content--withSidebar': showSidebar}")
      .main__shadows(v-show="isPageOpened()")
        .main__shadow--top
        .main__shadow--bottom
      TheHeader
      .main__tiles(v-if="!isPageOpened()")
        Grid
      //- Pages
  //- Modals
  ModalInDemo(v-if="isModalOpened('inDemo')")
  ModalReset(v-else-if="isModalOpened('reset')")
  ModalNewPassword(v-else-if="isModalOpened('newPassword')")
  ModalSignUp(v-else-if="isModalOpened('signUp')")
  ModalSignIn(v-else-if="isModalOpened('signIn')")
  ModalStatus(v-else-if="isModalOpened('status')")
  ModalEventStatusCompleted(v-else-if="isModalOpened('eventStatusCompleted')")
  ModalEventStatusFailed(v-else-if="isModalOpened('eventStatusFailed')")
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';


import {showWelcome} from '@/config';
import {scrollbar} from '@/directives';
import TheHeader from 'components/TheHeader';
import TheFooter from 'components/TheFooter';
import Sidebar from 'components/Sidebar';
import Toolbar from 'components/Toolbar';
import Grid from 'components/grid/Grid';
import ModalReset from 'components/ModalReset';
import ModalNewPassword from 'components/ModalNewPassword';
import ModalSignUp from 'components/ModalSignUp';
import ModalSignIn from 'components/ModalSignIn';
import ModalEventStatusCompleted from 'components/ModalEventStatusCompleted';
import ModalEventStatusFailed from 'components/ModalEventStatusFailed';
import Status from 'components/Status';

export default {
  computed: {
    ...mapState('misc', {
      showSidebar: 'showSidebar',
      currentPage: 'currentPage',
    }),
    ...mapState('membership', {
      token: 'token',
    }),
    ...mapGetters('membership', {
      isLoggedIn: 'isLoggedIn',
    }),
    ...mapGetters('modal', {
      isModalOpened: 'isOpened',
    }),
    ...mapGetters('page', {
      isPageOpened: 'isOpened',
    }),
    modalOpenedDesktop() {
      return this.isModalOpened();
    },
  },
  methods: {
    ...mapMutations('misc', {
      setSidebar: 'setSidebar',
    }),
    ...mapMutations('modal', {
      openModal: 'open',
    }),
    ...mapActions('membership', {
      dropUser: 'dropUser',
    }),
    ...mapActions('localization', [
      'setLang',
    ]),
    updateOverflow() {
      document.querySelector('#app').style.overflow = this.showSidebar ? 'hidden' : null;
    },
    modalChangeStyleforBody() {
      document.querySelector('body').style.overflow = (this.isModalOpened()) ? 'hidden' : 'auto';
    },
  },
  watch: {
    showSidebar() {
      this.updateOverflow();
    },
    modalOpenedDesktop() {
      this.modalChangeStyleforBody();
    },
    isLoggedIn(isTrue) {
      if (!isTrue) {
        this.openModal({name: 'signIn'});
        notification({
          text: 'Logged out',
        });
      } else {
      }
    },
  },
  created() {
    this.setLang();

    if (this.isLoggedIn) {
    };
  },
  mounted() {
    if (showWelcome) {
      this.openModal('welcome');
    }
    this.updateOverflow();
  },
  directives: {
    scrollbar,
  },
  components: {
    TheFooter,
    Sidebar,
    TheHeader,
    Toolbar,
    Grid,
    Status,
    ModalReset,
    ModalNewPassword,
    ModalSignUp,
    ModalSignIn,
    ModalEventStatusCompleted,
    ModalEventStatusFailed,
  },
};
</script>

<style src="noty/lib/noty.css"></style>
<style lang='scss'>
@import 'perfect-scrollbar/dist/css/perfect-scrollbar';
@import 'styles/fonts';
@import 'styles/defaults';
@import 'styles/global';
@import 'styles/overrides';
@import 'variables';

.main {
  min-height: 100%;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
  &__body {
    display: flex;
    // min-width: 1250px;
    min-height: 100vh;
    margin-left: auto;
    margin-right: auto;
    &--modalOpened {
      filter: blur(10px);
    }
  }
  &__leftSide {
    display: flex;
    width: $leftSide_width;
    // height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    transition: left $sidebar_speed linear;
    &--hidden {
      left: -280px;
    }
  }
  &__sidebar {
    width: $sidebar_width;
    position: relative;
    overflow-y: hidden;
  }
  &__toolbar {
    width: $toolbar_width;
  }
  &__content {
    position: relative;
    width: calc(100% - #{$toolbar_width});
    min-height: 100vh;
    margin-left: auto;
    transition: width $sidebar_speed linear;
    &--withSidebar {
      width: calc(100% - #{$leftSide_width});
    }
  }
  &--withSidebar {
    overflow: hidden;
  }
  &__shadow {
    &--bottom {
      position: fixed;
      width: 100%;
      bottom: 0;
      height: 300px;
      background: $background__shadow__gradient__to__top;
    }
  }
}
</style>
