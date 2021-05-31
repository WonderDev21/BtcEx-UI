import request from '../../common/request';

export async function getLoginOTP(data) {
  const resp = await request('post', '/login', data);
  return resp.data;
}

export async function loginWithOTP(data) {
  const resp = await request('post', '/loginOTP', data);
  return resp.data;
}

export async function registerUser(reqBody) {
  const resp = await request("post", "/register", reqBody);
  return resp.data;
}

export async function logoutUser() {
  const resp = await request("post", "/user/logout");
  return resp.data;
}

export async function regenrateOTP() {
  const resp = await request('post', '/resendOTP', {});
  return resp.data;
}

export async function sendForgotPasswordEmail(data) {
  const resp = await request('post', '/user/forgotPassword', data);
  return resp.data;
}

export async function updateForgotPassword(data) {
  const resp = await request('post', '/user/updatePassword', data);
  return resp.data;
}

export async function userInfo() {
  const resp = await request('get', '/me');
  return resp.data;
}
