import request from '../../common/request';

export async function getTradeFees() {
  const resp = await request('get', '/fees');
  return resp.data;
}
