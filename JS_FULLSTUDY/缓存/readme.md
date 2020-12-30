强缓存
## cache-control
通用的


## 协商缓存

响应：etag  请求：if-none-match
响应：last-modified 请求：if-modified-since


在HTTP/1.1中，
Cache-Control是最重要的规则，主要用于控制网页缓存，列几个常见的值：
public：所有内容都将被缓存（客户端和代理服务器都可缓存）
private：所有内容只有客户端可以缓存，Cache-Control的默认取值
no-cache：客户端缓存内容，但是是否使用缓存则需要经过协商缓存来验证决定
no-store：所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存
max-age=xxx (xxx is numeric)：缓存内容将在xxx秒后失效