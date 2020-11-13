// 手动封装一个请求函数，可以设置最大请求次数，如果请求成功就不再请求
// 如果请求失败就继续请求，直到达到最大次数

function request(url, body, successCallback, errorCallback, maxCount = 3) {
  return fetch(url, body)
          .then(response => successCallback(response))
          .catch(err => {
            if (maxCount <= 0) return errorCallback('请求超时')
            return request(url, body, successCallback, errorCallback, --maxCount)
          })
}