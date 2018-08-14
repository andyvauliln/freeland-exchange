import api from './api';

export const exchangePairs = () => api.get('/pairs');
export const exchangePairInfo = ({baseCurrency, quoteCurrency}) => api.get('/pair/${baseCurrency}/${quoteCurrency}');
export const getTradeHistory = ({Pair, CurrencyPairValid, Page, Limit}) => api.get('/trades', {params: {Pair, CurrencyPairValid, Page, Limit}});
export const getOrderBook = ({baseCurrency, quoteCurrency, limit}) => api.get('/orders/orderBook', {params: {baseCurrency, quoteCurrency, limit}});
