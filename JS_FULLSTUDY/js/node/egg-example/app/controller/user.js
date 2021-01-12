'use strict';

const Controller = require('egg').Controller;   

class USERController extends Controller {
  async index() {
    this.ctx.body = [
      {name: 'jinlong'},
      {name: 'pipi'}
    ]
  }
}

module.exports = USERController