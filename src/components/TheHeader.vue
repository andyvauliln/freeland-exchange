<template lang="pug">
header.header
  .header__main
    TheHeaderPair
    .header__userbar
      TheHeaderLogout
</template>

<script>
import BButton from './BButton';
import TheHeaderPair from './TheHeaderPair';
import TheHeaderLogout from './TheHeaderLogout';

export default {
  data() {
    return {
    };
  },
  computed: {
  },
  components: {
    BButton,
    TheHeaderPair,
    TheHeaderLogout,
  },
};
</script>

<style lang="scss">
@import 'variables';

.header {
  padding: 12px 28px;
  width: 100%;
  color: #fff;
  background-color: $color_blue;
  &__main {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__userbar {
    display: flex;
  }
  &__profileTitle {
    width: 100%;
    line-height: 25px;
    text-align: center;
    font-size: 16px;
    font-weight: 900;
    text-transform: uppercase;
  }
}
</style>
