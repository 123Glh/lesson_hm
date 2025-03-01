'use strict'
// 中间件函数
// 闭包
module.exports = (secret) => {
  return async function jwtErr(ctx, next) {
    const token = ctx.request.header.authorization;
    // console.log('---------------------------');
    let decode;
    if (token && token != 'null') {
      try {
        decode = ctx.app.jwt.verify(token, secret)
        // console.log(decode);
        ctx.user = decode;
        await next();
      } catch (err) {
        ctx.body = {
          code: 401,
          mag: 'token 失效或过期，请重新登录'
        }
      }

    } else {
      ctx.status = 200;
      ctx.body = {
        code: 401,
        msg: '状态码不存在'
      }
    }
  }
}