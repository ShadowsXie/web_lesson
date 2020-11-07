import axios from './../api'

const getShops = data => {
  return axios({
    url: '/shop',
    method: 'post',
    data
  })
}

export default {
  getShops
}