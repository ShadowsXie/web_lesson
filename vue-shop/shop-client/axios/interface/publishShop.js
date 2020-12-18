import axios from './../api'

const publishShop = data => {
  return axios ({
    url: '/publish',
    method: 'post',
    data
  })
}

export default {
  publishShop
}