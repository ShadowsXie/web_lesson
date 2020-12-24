 cookie            localStorage          sessionStorage              indexDB
  可设置            
 过期时间           需手动清除            关闭页面清除                  需手动清除           过期时间

   4k                 5M                     5M                        无限大              大小

每次携带在header      不参与                不参与                      不参与            是否在http请求中携带
中 影响性能




cookie：(属性)
  value：保存用户登录状态，值应该加密
  http-only: 不能通过js访问cookie，防止xss攻击
  secure: 只在传输协议为https的请求中携带
  same-site: 规定浏览器不能在跨域请求中携带cookie,减少CSRF攻击


# 什么是 Service Worker
运行在浏览器背后的独立线程，一般用来实现缓存的功能，传输协议必须是HTTPS


共同点：都是保存在浏览器端、且同源的 
区别： 
1、cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递，而sessionStorage和localStorage不会自动把数据发送给服务器，仅在本地保存。cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下 
2、存储大小限制也不同，cookie数据不能超过4K，同时因为每次http请求都会携带cookie、所以cookie只适合保存很小的数据，如会话标识。sessionStorage和localStorage虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大 
3、数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭之前有效；localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie：只在设置的cookie过期时间之前有效，即使窗口关闭或浏览器关闭 
4、作用域不同，sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；localstorage在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的 
5、web Storage支持事件通知机制，可以将数据更新的通知发送给监听者 
6、web Storage的api接口使用更方便