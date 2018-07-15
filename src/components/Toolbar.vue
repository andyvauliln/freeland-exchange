<template lang='pug'>
.toolbar
  .toolbar__group
    Icon.toolbar__icon(
      :id="(showSidebar) ? 'cross' : 'hamburger'",
      @click='toggleSidebar',
    )
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState('misc', [
      'showSidebar',
    ]),
  },
  methods: {
    ...mapMutations('misc', [
      'toggleSidebar',
    ]),
    isActive(section) {
      return (section === this.section) ? 'toolbar__icon--active' : '';
    },
  },
  components: {
  },
};

</script>

<style lang='scss'>
@import 'variables';

.toolbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 15px 0;
  background-color: $color_blue;
  background-image: linear-gradient(to top, #01253A 0%, #03354F 100%);
  border-left: 1px solid $color_tangaroa;
  z-index: 1;
  flex-shrink: 0;
  &__iconWrap {
    cursor: pointer;
    position: relative;
    margin-bottom: 32px;
  }
  &__icon {
    $size: 20px;
    height: $size;
    width: $size;
    fill: #fff;
    &--active {
      fill: #e9bd24;
    }
    &:not(:last-of-type) {
      margin-bottom: 32px;
    }
    &:hover {
      cursor: pointer;
      fill: #e9bd24;
    }
  }
  &__notifications {
    position: absolute;
    top: -2px;
    right: -5px;
    background-color: #f33a3a;
    border-radius: 10px;
    padding: 1px 4px;
    color: #ffffff;
    font-family: Roboto;
    font-size: 11px;
    font-weight: 900;
  }
}
</style>
