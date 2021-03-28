let xhr = new XMLHttpRequest()
xhr.open('get', 'http://neteasecloudmusicapi.zhaoboy.com/top/list?idx=1')
xhr.send()
xhr.onreadystatechange = function (params) {
  if(xhr.readyState == 4 || xhr.status == 200) {
    console.log(JSON.parse(xhr.responseText));
  }
}