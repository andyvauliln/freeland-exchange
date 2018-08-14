<template lang="pug">
.gridItem
  .gridItem__title(v-if="this.component === 'buySell'")
    .gridItem__titleContent
      BuySell
  .gridItem__title(v-if="this.component === 'book'")
    .gridItem__titleContent.gridItem__titleContent--books
      TitleHeader.gridItem__titleHeader.gridItem__titleHeader--book(title='Order book' center)
      .gridItem__books
        .gridItem__containerWitchOverflow(v-scrollbar="")
          OrderBook.gridItem__book(:limit='19')
        .gridItem__containerWitchOverflow(v-scrollbar="")
          OrderBook.gridItem__book(ask, :limit='19')
  .gridItem__title.gridItem__title--history(v-if="this.component === 'history'" )
    .gridItem__titleContent.gridItem__titleContent--history
      TitleHeader.gridItem__TitleHeader.gridItem__TitleHeader--history(title='History of trades' center)
      .gridItem__containerWitchOverflow(v-scrollbar="")
        History
  Icon.gridItem__deletetitle(id="trash", @click="removeGridLayout(component)" v-show="isEdit")
</template>

<script>
import {mapState, mapMutations} from 'vuex';
import {scrollbar} from '@/directives';
import TitleHeader from './TitleHeader';
import History from './History';
import BuySell from './BuySell';
import OrderBook from './OrderBook';

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
    BuySell,
    OrderBook,
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
  &__title {
    width: 100%;
    height: 100%;
    background-color: $color_blue;
  }
  &__titleContent {
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
    &--books {
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
  &__books {
    width: 100%;
    display: flex;
    padding: 13px;
  }
  &__containerWitchOverflow {
    position: relative;
    display: flex;
    flex: 1;
  }
  &__deletetitle {
    position: absolute;
    top: 10px;
    right: 10px;
    fill: red;
    cursor: pointer;
    z-index: 1;
  }
}
</style>
