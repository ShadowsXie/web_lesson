cookie 和 localStore(5mb) sessionStorage 都属于前端存储
如果 cookie 里面有内容，自动把cookie当作请求头传输给后端

httpOnly: 只在http环境下传输，js无法操作（减少 XSS 攻击）

secure https环境下传输
