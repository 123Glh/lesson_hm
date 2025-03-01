/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  mysql: {
    enable: true,
    package: 'egg-sequelize', // 指定包名 egg-sequelize 用来操作数据库
  },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  }
};