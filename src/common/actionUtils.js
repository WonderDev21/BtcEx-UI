export const isSuccess = x => x.split('_').pop() === 'SUCCESS';
export const isFailure = x => x.split('_').pop() === 'FAILURE';
