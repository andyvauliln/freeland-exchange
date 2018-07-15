import Vue from 'vue';
import i18n from './i18n';
import store from './store';
import router from './router';
import Vuelidate from 'vuelidate';
import Icon from './components/Icon';

Vue.component('Icon', Icon);
Vue.use(Vuelidate);


Vue.mixin({
  methods: {
    openReset() {
      store.commit('modal/open', {
        name: 'reset',
      });
    },
    openInDemo() {
      store.commit('modal/open', {
        name: 'inDemo',
      });
    },
    openSignUp() {
      store.commit('modal/open', 'signUp');
    },
    openSignIn() {
      store.commit('modal/open', 'signIn');
    },
  },
});

new Vue({
  el: '#app',
  i18n,
  store,
  router,
  created() {
    const icons = require.context('./assets/icons/', true, /\.(svg)$/);
    icons.keys().forEach(icons);
  },
});
