Promise.myAll = function(promiseArr) {
  return new Promise((resolve, reject) => {
    let res = [], count = 0
    for (let i = 0; i < promiseArr.length; i ++) {
      promiseArr[i].then((r) => {
        res[i].push(r)
        count ++
        if (count === promiseArr.length) {
          return res
        }
      })
      .catch(() => {
        resolve()
      })
    }
  })
}