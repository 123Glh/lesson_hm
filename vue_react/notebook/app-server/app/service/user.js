'use strict'
const { Service } = require('egg')

class UserService extends Service {
  async getUserByName(username) {
    const { ctx } = this;
    try {
      const result = await this.ctx.model.User.findOne({
        where: {
          username
        }
      })
      return result;
    } catch (e) {
      console.log(e)
      return null;
    }
  }
  async register(user) {
    const { ctx } = this;
    try {
      // orm 操作
      // sequelize 
      const result = await ctx.model.User.create(user)
      // console.log(result);
      return result;
    } catch (e) {
      console.log(e)
      return null;
    }
  }
  async editUserInfo(username, signature) {
    const { ctx } = this;
    try {
      const user = await this.getUserByName(username);
      console.log(user);
      if (!user) {
        ctx.status = 404;
        return null;
      }
      let result = await user.update({
        signature
      })
      return result;
    } catch (e) {
    }
  }
}
module.exports = UserService