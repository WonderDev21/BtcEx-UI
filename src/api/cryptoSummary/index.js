import request from '../../common/request';

export async function getCryptoSummary() {
  const resp = await request('get', '/api/v1/summary');
  return resp.data;
}
