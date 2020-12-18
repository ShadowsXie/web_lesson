import axios from '../api'

const uploadFile = data => {
  return axios ({
    url: '/uploadFile',
    method: 'post',
    data
  })
}

export default {
  uploadFile
}