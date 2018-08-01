<template lang='pug'>
.TitleHeader(:class="{'TitleHeader--center': center}")
  .TitleHeader__wrapper
    .TitleHeader__title {{title}}
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: '',
      required: false,
    },
    center: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'variables';
.TitleHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__title {
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
  }
  &__flag {
    width: 7px;
    height: 10px;
    margin-right: 15px;
    fill: $color_yellow;
  }
  &__wrapper {
    display: flex;
  }
  &--center {
    justify-content: center;
  }
}
</style>
