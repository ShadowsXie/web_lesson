// 记录日志，每次请求的方法，url，状态码，响应时间
import { Context } from 'koa'

export function logger() {
  return async (ctx: Context, next: () => Promise<void>) => {
    const start = Date.now()
    await next()
    const ms = Date.now() - start
    console.log(`${ctx.method} ${ctx.url} ${ctx.status} - ${ms}ms`);
    
  } 
}