<template lang="pug">
button.button(
  v-bind="$attrs" v-on="$listeners",
  :class="[`button--${color}`, {'button--full': full}, {'button--outline': outline}, {'button--rounded': rounded}, {'button--caps': caps}]",
  :disabled="isLoading(loader)"
)
  span.button__content
    slot
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters('loader', {
      isLoading: 'isLoading',
    }),
  },
  props: {
    color: {
      type: String,
      required: false,
      default: 'green',
    },
    rounded: {
      type: Boolean,
      required: false,
      default: false,
    },
    outline: {
      type: Boolean,
      required: false,
      default: false,
    },
    full: {
      type: Boolean,
      required: false,
      default: false,
    },
    caps: {
      type: Boolean,
      required: false,
      default: false,
    },
    loader: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

<style lang='scss'>
@import 'variables';
$ROOT: "button";
.#{$ROOT} {
  min-height: 28px;
  font-size: 16px;
  white-space: nowrap;
  padding: 8px 20px;
  color: $color_daintree;
  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: inherit;
    font-weight: 700;
    color: inherit;
    transition: all .5s;
    &:hover {
      transition: all .5s;
    }
  }
  &--yellow {
    $color1: #fff;
    $color2: darken(desaturate(adjust-hue($color1, -13), 11.89), 8.04);
    $colorHover1: $color_yellow;
    $colorHover2: darken(saturate(adjust-hue($colorHover1, 41), 22.45), 30.78);
    $darken_hover: 5%;
    $darken_active: 10%;
    border-color: $color1;
    background-image: linear-gradient(180deg, $color1 0, $color2 100%);
    &:hover {
      color: #fff;
      border-color: $colorHover1;
      background-image: linear-gradient(0, $color_yellow 0, $color_yellow 100%);;
    }
    &.#{$ROOT}--outline {
      color: #fff;
      &:hover {
        background-image: $color_yellow;
        color: $color_energy;
      }
    }
  }
  &--malachite {
    $color1: $color_malachite;
    $color2: darken(saturate(adjust-hue($color_malachite, 41), 22.45), 30.78);
    $colorHover1: $color_energy;
    $colorHover2: darken(desaturate(adjust-hue($colorHover1, -13), 11.89), 8.04);
    $darken_hover: 5%;
    $darken_active: 10%;
    color: #fff;
    border-color: $color1;
    background-image: linear-gradient(180deg, $color1 0, $color2 100%);
    &:hover {
      color: $color_daintree;
      border-color: $colorHover1;
      background-image: linear-gradient(180deg, $colorHover1 0, $colorHover2 100%);
    }
    &.#{$ROOT}--outline {
      &:hover {
        color: $color_energy;
        background-image: none;
      }
    }
  }
  &--green{
    color: #fff;
    background-image: linear-gradient(180deg, #10df4d 0%, #02550f 100%);
  }
  &--red{
    color: #fff;
    background-image: linear-gradient(180deg, $color_red 0%, #540202 100%);
  }
  &--full {
    width: 100%;
  }
  &--caps {
    text-transform: uppercase;
  }
  &--rounded {
    border-radius: 2px;
  }
  &--outline {
    background-image: none;
    background-color: transparent;
    border-style: solid;
    border-width: 1px;
  }
}
</style>
