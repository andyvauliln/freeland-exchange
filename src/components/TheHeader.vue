<template lang="pug">
header.header
  .header__main
    .header__stats
    .header__userbar
      TheHeaderLogout
</template>

<script>
import TheHeaderLogout from './TheHeaderLogout';

export default {
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
  },
  components: {
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
