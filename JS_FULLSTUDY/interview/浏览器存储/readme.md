 cookie            localStorage          sessionStorage              indexDB
  可设置            
 过期时间           需手动清除            关闭页面清除                  需手动清除

   4k                 5M                     5M                        无限大

每次携带在header      不参与                不参与                      不参与
中 影响性能




cookie：(属性)
  value：保存用户登录状态，值应该加密
  http-only: 不能通过js访问cookie，防止xss攻击
  secure: 只在传输协议为https的请求中携带
  same-site: 规定浏览器不能在跨域请求中携带cookie,减少CSRF攻击


# 什么是 Service Worker
运行在浏览器背后的独立线程，一般用来实现缓存的功能，传输协议必须是HTTPS
