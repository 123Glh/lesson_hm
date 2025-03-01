// Service 模块 sql
'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async user() {
    return {
      name: "嘎子",
      slogen: "潘子nm"
    }
  }
}
module.exports = HomeService;