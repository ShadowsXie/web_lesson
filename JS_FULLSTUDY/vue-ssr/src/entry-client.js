import { createApp } from './app.js'
let { app } = createApp()
app.$mount('#app')     // 渲染在浏览器上面

// （服务端渲染）同构 一份代码既在服务端运行，也可以在客户端运行