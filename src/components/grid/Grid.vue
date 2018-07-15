<template lang="pug">
.grid
  GridPanel(:data="getHiddenLayout", :isEdit="isEdit")
  GridLayout(
      :layout="(gridData)",
      :col-num="12",
      :row-height="60",
      :is-draggable="isEdit",
      :is-resizable="isEdit",
      :vertical-compact="true",
      :margin="[0, 0]",
      :use-css-transforms="true",
      @layout-updated="layoutUpdatedEvent",
    )
</template>

<script>
import VueGridLayout from 'vue-grid-layout';
import {mapState, mapMutations, mapGetters} from 'vuex';
import GridPanel from './GridPanel';

const GridLayout = VueGridLayout.GridLayout;

export default {
  computed: {
    ...mapState('grid', {
      allGridLayout: 'allGridLayout',
      gridData: 'gridData',
      isEdit: 'isEdit',
    }),
    ...mapGetters('grid', {
      getHiddenLayout: 'getHiddenLayout',
    }),
  },
  methods: {
    ...mapMutations('grid', {
      changeGrid: 'changeGrid',
      setIsEdit: 'setIsEdit',
    }),
    layoutUpdatedEvent(newLayout) {
      this.changeGrid(newLayout);
      // console.log('Updated layout: ', newLayout);
    },
  },
  components: {
    GridLayout,
    GridPanel,
  },
};
</script>

<style lang="scss">
  .grid {
    margin: 0 1px;
    &__edit {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border: 1px solid rgb(24, 34, 53);
      border-radius: 50%;
      margin-bottom: 5px;
      &:hover {
        background: rgb(24, 34, 53);
      }
    }
  }
</style>
