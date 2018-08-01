import api from './api';

export const exchangePairs = () => api.get('/Exchange/pairs');
export const exchangePairInfo = ({baseCurrency, quoteCurrency}) => api.get(`/Exchange/pair/${baseCurrency}/${quoteCurrency}`);
export const getTradeHistory = ({Pair, CurrencyPairValid, Page, Limit}) => api.get('/trades', {params: {Pair, CurrencyPairValid, Page, Limit}});
