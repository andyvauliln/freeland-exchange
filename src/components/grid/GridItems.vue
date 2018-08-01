<template lang="pug">
.gridItem
  .gridItem__tile.gridItem__tile--history(v-if="this.component === 'history'" )
    .gridItem__tileContent.gridItem__tileContent--history
      TitleHeader.gridItem__TitleHeader.gridItem__TitleHeader--history(title='History of trades' center)
      .gridItem__containerWitchOverflow(v-scrollbar="")
        History
  Icon.gridItem__deleteTile(id="trash", @click="removeGridLayout(component)" v-show="isEdit")
</template>

<script>
import {mapState, mapMutations} from 'vuex';
import {scrollbar} from '@/directives';
import TitleHeader from './TitleHeader';
import History from './History';

export default {
  computed: {
    ...mapState('grid', {
      isEdit: 'isEdit',
    }),
  },
  methods: {
    ...mapMutations('grid', {
      removeGridLayout: 'removeGridLayout',
    }),
  },
  props: {
    component: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  directives: {
    scrollbar,
  },
  components: {
    TitleHeader,
    History,
  },
};
</script>

<style lang="scss">
@import '~perfect-scrollbar/dist/css/perfect-scrollbar';
@import 'variables';
@import '~@/sass/overrides';

.gridItem {
  height: 100%;
  outline: 1px solid #0a0a0a;
  position: relative;
  &__tile {
    width: 100%;
    height: 100%;
    background-color: $color_blue;
  }
  &__tileContent {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    &--buysell {
      width: 15%;
    }
    &--history {
      padding: $default_spacing;
    }
  }
  &__TitleHeader {
    &--history {
      margin-bottom: $default_spacing;
    }
    &--book {
      padding: $default_spacing;
    }
    &--orders {
      margin-bottom: $default_spacing;
    }
  }
  &__containerWitchOverflow {
    position: relative;
    display: flex;
    flex: 1;
  }
  &__deleteTile {
    position: absolute;
    top: 10px;
    right: 10px;
    fill: red;
    cursor: pointer;
    z-index: 1;
  }
}
</style>
