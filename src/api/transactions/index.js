import request from '../../common/request';

export async function getAccountStatement(userId, offset = 0) {
  const resp = await request('get', `/accountStatement/${userId}?offset=${offset}`);
  return resp.data;
}

export async function getAllDepositRequests(userId, offset = 0) {
  const resp = await request('get', `/requests/${userId}?offset=${offset}`);
  return resp.data;
}

export async function getUserTransactions(userId, offset = 0, txnType) {
  let url = `/transactions/user/${userId}?offset=${offset}`;
  if (txnType) {
    url = url + `&txnType=${txnType}`;
  }
  const resp = await request('get', url);
  return resp.data;
}
