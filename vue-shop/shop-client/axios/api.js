import axios from 'axios'
import config from './config.js'
import qs from 'qs'

import { Toast } from 'vant'

export default function $axios(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: config.baseURL,
      headers: {},
      transformResponse: [function(data) {}]
    })

    instance.interceptors.request.use(
      config => {
        if (config.method.toLocaleLowerCase() === 'post' || config.method.toLocaleLowerCase() === 'put' || config.method.toLocaleLowerCase() === 'delete') {
          config.data = qs.stringify(config.data)
        }
        return config
      },
      error => {
        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
          console.log('请求超时');
          Toast.fail('请求超时')
        }
      }
    )
  })
}