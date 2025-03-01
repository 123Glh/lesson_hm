'use strict'; // 严格模式

const Controller = require('egg').Controller;
// import { Controller } from 'egg';

// 继承 基类
class PostController extends Controller {
  async index() {
    // this? ctx 上下文 = req + res
    const { ctx } = this;
    ctx.body = '文章列表'
  }
}
module.exports = PostController;