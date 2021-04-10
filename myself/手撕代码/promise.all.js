Promise.prototype.mypromiseAll = function(promiseArr) { 
  return new Promise((resolve, reject) => {
    let res = [], count = 0
    for(let i = 0; i < promiseArr.length; i ++) {
      promiseArr[i].then((r) => {
        res[i] = r
        count ++
        if(count === promiseArr.length) {
          return res
        }
      })
      .catch(() => {
        reject()
      })
    }
  })
}