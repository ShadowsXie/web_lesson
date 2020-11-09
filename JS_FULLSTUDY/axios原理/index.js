// axios(config)
// axios.method(url, data, config)

axios.interceptors.request.use(
  (conig) => {
    // 在发送请求之前做些什么
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (res) => {
    return res
  },
  (error) => {
    // 对响应错误
    return Promise.reject(error)
  }
)