'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async leitai() {
    const { ctx, service } = this;
    ctx.body = await service.app.getInfo();
  }
  async config() {
    const { ctx, service } = this;
    ctx.body = await service.app.getConfig();
  }
}

module.exports = HomeController;
