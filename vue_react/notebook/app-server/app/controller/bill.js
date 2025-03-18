const Controller = require('egg').Controller;

class BillController extends Controller {
  async add() {
    const { ctx, app } = this;
    const {
      amount,
      type_id,
      type_name,
      date,
      pay_type,
      remark
    } = ctx.request.body;
    console.log(amount, type_id, type_name, date, pay_type, remark);
    if (!amount || !type_id || !type_name || !date || !pay_type) {
      ctx.body = {
        code: 400,
        msg: '参数不齐全'
      }
      return;
    }
    try {
      let user_id = ctx.user.id;
      const result = await ctx.service.bill.add({
        amount,
        type_id,
        type_name,
        date,
        pay_type,
        user_id,
        remark
      });
      console.log(result);
      ctx.body = { code: 200, msg: '添加成功', data: result };
    } catch (err) {
      // console.log(err);
      ctx.body = { code: 500, msg: '服务器内部错误' };
    }
  }
  async update() {
    const { ctx, app } = this;
    const { id } = ctx.params;
    const {
      amount,
      type_id,
      type_name,
      date,
      pay_type,
      remark = ''
    } = ctx.request.body;
    if (!id || !amount || !type_id || !type_name || !date || !pay_type) {
      ctx.body = {
        code: 400,
        msg: '参数不齐全'
      }
      return;
    }
    try {
      const user_id = ctx.user.id;
      const result = await ctx.service.bill.update({
        id,
        amount,
        type_id,
        type_name,
        date,
        pay_type,
        user_id,
        remark
      });
      ctx.body = { code: 200, msg: '修改成功', data: result };
    } catch (err) {
      console.log(err);
      ctx.body = { code: 500, msg: '服务器内部错误' };
    }
  }
  async delete() {
  }
  async delete() {
    const { ctx, app } = this;
    const { id } = ctx.params;
    if (!id) {
      ctx.body = {
        code: 400,
        msg: '参数不齐全'
      }
      return;
    }
    try {
      const result = await ctx.service.bill.delete(id);
      ctx.body = { code: 200, msg: '删除成功', data: result };
    } catch (err) {
      console.log(err);
      ctx.body = { code: 500, msg: '服务器内部错误' };
    }
  }
  async detail() {
    const { ctx, app } = this;
    const { id } = ctx.params;
    console.log(id);
    if (!id) {
      ctx.body = {
        code: 400,
        msg: '参数不齐全'
      }
      return;
    }
    try {
      const result = await ctx.service.bill.detail(id);
      ctx.body = { code: 200, msg: '获取成功', data: result };
    } catch (err) {
      console.log(err);
      ctx.body = { code: 500, msg: '服务器内部错误' };
    }
  }
}
module.exports = BillController;