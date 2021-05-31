import BigNumber from 'bignumber.js';
import _ from 'lodash';

export const convertToCurrency = (rates = {}, exchangeRates, currency) => {
  const newMap = {};
  const rateKeys = Object.keys(rates);
  const rateLength = rateKeys.length;
  for (let i = 0; i < rateLength; i += 1) {
    const c = rateKeys[i];
    newMap[c] = {};
    newMap[c].change = rates[c].change;
    newMap[c].price = (new BigNumber(exchangeRates[currency])).multipliedBy(rates[c].price).toNumber();
  }
  return newMap;
};

export const convertFromINR = (rates = {}, exchangeRates) => {
  const newMap = {};
  const rateKeys = Object.keys(rates);
  const rateLength = rateKeys.length;
  for (let i = 0; i < rateLength; i += 1) {
    const c = rateKeys[i];
    newMap[c] = {};
    newMap[c].change = rates[c].change;
    newMap[c].price = `${(new BigNumber(rates[c].price || 0)).dividedBy(exchangeRates.INR || 1).toNumber()}`;
  }
  return newMap;
};

export const parseTickerPrice = (tickerRates = [], baseCurrency) => {
  const obj = {};
  _.forEach(tickerRates, (arr, coin) => {
    obj[arr[0]] = { change: arr[1], price: (new BigNumber(baseCurrency)).multipliedBy(arr[2] || 0).toNumber() };
  });
  return obj;
};

export const mapTickerArray = (arr, ourTicker, baseRate) => {
  const obj = {};
  _.forEach(arr, (val, coin) => {
    obj[coin] = [coin, val.change, val.price];
  });
  _.forEach(ourTicker, (val, coin) => {
    obj[coin] = [coin, _.get(obj, `${coin}[1]`, 0), ((new BigNumber(val.price)).dividedBy(baseRate)).toNumber()];
  });
  return obj;
};
