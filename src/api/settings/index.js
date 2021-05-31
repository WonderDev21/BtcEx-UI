import request from '../../common/request';

export async function updateUserPassword(userId, data) {
  const resp = await request('post', `/user/${userId}/updatePassword`, data);
  return resp.data;
}

export async function get2FACode(userId) {
  const resp = await request('get', `/user/${userId}/get2FA`);
  return resp.data;
}

export async function enable2FACode(userId, code) {
  const resp = await request('post', `/user/${userId}/enable2FA`, { code });
  return resp.data;
}

export async function disable2FACode(userId, code) {
  const resp = await request('post', `/user/${userId}/disable2FA`, { code });
  return resp.data;
}

export async function verify2FACode(userId, code) {
  const resp = await request('post', `/user/${userId}/verify2FA`, { code });
  return resp.data;
}
