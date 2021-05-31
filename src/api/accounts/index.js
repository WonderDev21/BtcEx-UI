import request from '../../common/request';

export async function getTickers() {
  const resp = await request('get', '/publicTicker');
  return resp.data;
}

export async function getExchangeRates() {
  const resp = await request('get', '/exchange-rates');
  return resp.data;
}

export async function getPrices() {
  const resp = await request('get', '/prices');
  return resp.data;
}

export async function getWalletAddress(userId, currency) {
  const resp = await request('get', `/user/${userId}/getWallet?currency=${currency}`);
  return resp.data;
}

export async function submitDepositRequest(userId, data) {
  const resp = await request('post', `/request/${userId}/deposit`, data);
  return resp.data;
}

export async function withdrawAmount(txn) {
  const resp = await request('post', `/transaction/${txn.userId}/withdraw?currency=${txn.currency}`, txn);
  return resp.data;
}

export async function withdrawByOTP(userId, data) {
  const resp = await request('post', `/transaction/${userId}/withdrawByOTP`, data);
  return resp.data;
}
