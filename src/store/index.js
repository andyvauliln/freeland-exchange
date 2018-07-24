import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import misc from './modules/misc';
import localization from './modules/localization';
import trade from './modules/trade';
import loader from './modules/loader';
import modal from './modules/modal';
import page from './modules/page';
import membership from './modules/membership';
import grid from './modules/grid';


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    misc,
    localization,
    trade,
    loader,
    modal,
    page,
    membership,
    grid,
  },
  plugins: [createPersistedState({
    paths: [
      'trade.pair',
      'trade.pairs',
      'membership.token',
      'membership.userId',
      'membership.refreshToken',
      'membership.email',
      'membership.lastAction',
    ],
  })],
});

export default store;
