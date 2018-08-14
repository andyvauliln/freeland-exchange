// import * as Trade from '../../services/api/trade';
import pairsMocks from '../../mocks/pairsMock';
import pairInfoMock from '../../mocks/pairInfoMock';
import historyMock from '../../mocks/historyMock';
import orderBookMock from '../../mocks/orderBookMock';

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
    getLastTrades(state) {
      return state.trades;
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
    setTradeHistory(state, trades) {
      state.trades = trades.data;
    },
    setBook(state, data) {
      state.book = data;
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
      getTradeHistory({state, commit}) {
          commit('setTradeHistory', historyMock);
      },
      getOrderBook({getters, commit}, {limit}) {
        commit('setBook', orderBookMock);
      },
 },
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
};
