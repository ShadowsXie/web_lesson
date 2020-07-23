// ajax
    // wx.request 从本地小程序 -> 服务器
    // localhost:1234
    // fetch web 做接口请求的地方
    const bannerEle = document.querySelector('#banner')

     fetch('http://neteasecloudmusicapi.zhaoboy.com/banner')
    // .then 等待上文操作完成,此为请求完成之后将二进制数据流转化为json格式
     .then(data => data.json())
     .then(data => {
        //  console.log(data)
        if (data.code == 200) { //状态码
        const banners = data.banners;
        const html = banners.map((banner) => {
            // console.log(banner);
            return`
                <img src="${banner.imageUrl}">
                `
        })
        console.log(html);
        bannerEle.innerHTML = html.join('');
    //     // console.log(banners, '+++++++');
    //     // array  -> html DOM 结点 
    //     for(let banner of banners) {
    //       console.log(banner);
    //       bannerEle.innerHTML += `<img src="${banner.imageUrl}"/>`
    //     }
        // bannerEle.innerHTML = banners.map()
      } else {
        console.log('请求失败')
      }
    })