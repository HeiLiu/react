import jsonp from './jsonp'
import { URL, PARAM, OPTION } from './config'

export function getCarousel() {
  const data = Object.assign({}, PARAM, {
    g_tk: 701075963,
    uin: 0,
    platform: "h5",
    needNewCode: 1,
    _: new Date().getTime()
  })
  return jsonp(URL.carousel, data, OPTION)
}

// 有一个数据的需求， 就到api 相应业务文件下加一个方法就好
export function getAlbumInfo(albumMid) {
  const data = Object.assign({}, PARAM, {
    albumid: albumMid,
    g_tk: 1278911659,
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0 
  })
  return jsonp(URL.albumInfo, data, OPTION)
}

export function getNewAlbum() {
  const data = Object.assign({}, PARAM, {
    g_tk: 1278911659,
		hostUin: 0,
		platform: "yqq",
		needNewCode: 0,
		data: `{"albumlib":{"method":"get_album_by_tags","param":{"area":1,"company":-1,"genre":-1,"type":-1,"year":-1,"sort":2,"get_tags":1,"sin":0,"num":50,"click_albumid":0},"module":"music.web_album_library"}}`
  })
  const option = {
    param: 'callback',
    prefix: 'callback'
  }
  return jsonp(URL.newablum, data, option)
}

