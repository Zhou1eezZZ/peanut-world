import request from '@/utils/request'

export function getColor(data) {
  return request({
    url: `https://colorhunt.co/hunt.php`,
    method: 'post',
    data
  })
}
const appKey = '14ec61db9c451f22'
export function fetchNews() {
  return request({
    url: '/api/news/search',
    method: 'get',
    params: {
      appkey: appKey,
      keyword: '自闭症'
    }
  })
}

const ColorHuntAPI = {
  getColor,
  fetchNews
}

export default ColorHuntAPI
