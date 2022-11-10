import request from './request';

interface AdminLoginRes {
  code: number;
  banners?: {}[];
  result?:{}[];
  playList?:{playlist?:{coverImgUrl?:string}}  
}
//登录返回token
export const homeSwiperApi = ():Promise<AdminLoginRes> => request.get('/banner?type=2')

export const homeMusicListApi = ():Promise<AdminLoginRes> => request.get('/personalized?limit=10')
//歌单详情页
export const listDetailApi = (id?:string):Promise<AdminLoginRes> => request.get(`/playlist/detail?id=${id}`)

