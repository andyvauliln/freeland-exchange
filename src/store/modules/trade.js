// import * as Trade from '../../services/api/trade';
import pairsMocks from '../../mocks/pairsMock';
import pairInfoMock from '../../mocks/pairInfoMock';

export default {
  state: {
    pair: 'BTC_USD',
    pairs: {},
  },
  getters: {
    baseCurrency(state) {
      return state.pair.split('_')[0];
    },
    quoteCurrency(state) {
      return state.pair.split('_')[1];
    },
    getPairName: (state, getters) => ({base = getters.baseCurrency, quote = getters.quoteCurrency}) => {
      return `${base}_${quote}`;
    },
  },
  mutations: {
    setPairs(state, data) {
      state.pairs = data;
    },
    setPair(state, pair) {
      state.pair = pair;
    },
    setPairInfo(state, data) {
      state.pairInfo = data;
    },
  },
  actions: {
    getPairs({commit}) {
      return commit('setPairs', pairsMocks);
    },
    getPairInfo({getters, commit}) {
      return commit('setPairInfo', pairInfoMock);
    },
    changeBaseCurrency({commit, dispatch, getters}, currency) {
        const pair = getters.getPairName({
          base: currency,
        });
        commit('setPair', pair);
      },
    changeQuoteCurrency({commit, dispatch, getters}, currency) {
        const pair = getters.getPairName({
          quote: currency,
        });
        commit('setPair', pair);
      },
 },
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
};
