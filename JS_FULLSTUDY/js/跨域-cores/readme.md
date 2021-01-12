http 头部文字
请求头
use-agent:

响应头
set-cookie: 后端设置 cookie

通用头：
当用在请求的时候
Content-Type: application/x-form-url-endcode | application/json
<input name="name" />
<input name="pwd ">
application/x-form-url-endcode: name=XXX&pwd=XXX
application/json: {name:xxx, pwd:XXX}
multipart/form-data:
-------分隔符--------
name=xxxx
-------分隔符--------
pwd=XXXX
-------分隔符--------

用在响应的时候
content-type: image/jpeg image/png text/html text/javascript
