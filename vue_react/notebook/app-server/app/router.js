/**
 * @param {Egg.Application} app - egg application
 */
// commonjs 模块 路由模块
module.exports = app => {
  // app 应用
  // router 路由
  // contorller 控制器
  const { router, controller, middleware } = app;
  // 中间件 中间件文件
  const _jwt = middleware.jwtErr(app.config.jwt.secret);
  router.get('/', controller.home.index);
  router.get('/post', controller.post.index);
  // router.get('/user/:id', controller.home.user);
  router.post('/add', controller.home.add);
  // 用户模块
  router.post('/register', controller.user.register);  // 注册
  router.post('/login', controller.user.login);   // 登录
  router.post('/upload', controller.upload.index) // 上传文件
  // 部分修改资源  put完全替换(文件)  patch 部分
  router.patch('/user/signature', _jwt, controller.user.editSignature)
  router.get('/user/getUserInfo', _jwt, controller.user.getUserInfo)
};