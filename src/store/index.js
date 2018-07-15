import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import misc from './modules/misc';
import localization from './modules/localization';
import loader from './modules/loader';
import modal from './modules/modal';
import membership from './modules/membership';
import grid from './modules/grid';
import page from './modules/page';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    misc,
    localization,
    loader,
    modal,
    membership,
    grid,
    page,
  },
  plugins: [createPersistedState({
    paths: [
      'membership.token',
      'membership.userId',
      'membership.refreshToken',
      'membership.email',
      'membership.lastAction',
    ],
  })],
});

export default store;
