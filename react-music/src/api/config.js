const URL = {
  carousel: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
  newablum: 'https://u.y.qq.com/cgi-bin/musicu.fcg',
  albumInfo: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg'
}

// format=jsonp
// &inCharset=utf-8
// &outCharset=utf-8
// &notice=0
// &albumid=000GsN4P1FzL6m
// &g_tk=1278911659
// &hostUin=0
// &platform=yqq
// &needNewCode=0
// &jsonpCallback=callback0
const PARAM = {
  format: 'jsonp',
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0
}

const OPTION = {
  prefix: 'callback',
  param: 'jsonpCallback'
}

const CODE_SUCCESS = 0

export { URL, PARAM, OPTION, CODE_SUCCESS }
