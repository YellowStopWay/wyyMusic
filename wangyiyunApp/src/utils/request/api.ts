import request from './request';

interface AdminLoginRes {
  code: number;
  banners?: {}[]
}
//登录返回token
export const homeSwiperApi = ():Promise<AdminLoginRes> => request.get('/banner?type=2')

