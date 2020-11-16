import { Context } from 'koa'

export default class UserController {
  public static async listUsers(ctx: Context) {
    ctx.body = 'listUsers controller'
  }

  public static async showUserDetail(ctx: Context) {
    ctx.body = `showUserDetail controller with ID = ${ctx.params.id}`
  }

  public static async updateUser(ctx: Context) {
    ctx.body = `updateUser controller with ID = ${ctx.params.id}`
  }

  public static async deleteUser(ctx: Context) {
    ctx.body = `deleteUser controller with ID = ${ctx.params.id}`
  }
}