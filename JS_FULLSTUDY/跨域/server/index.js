const http = require('http')
const qs = require('querystring')
// ?callback=xx&a=1&b=2
http.createServer((req, res) => {
  if (req.url.includes('/api')) {
    let json = {
      name: 'wn',
      age: 18
    }
    // ?callback=xx&a=1&b=2
    qs.parse(req.url.split('?')[1]);
    // {callback: 'xxx', a: 1, b: 2}
    let fn = qs.parse(req.url.split('?')[1]).callback
    res.end(`${fn}(${JSON.stringify(json)})`)
  } else {
    res.end('')
  }
})
.listen(8088, () => {
  console.log(8088);
})