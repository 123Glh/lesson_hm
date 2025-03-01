/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1740585771293_9171';

  // add your middleware config here
  config.middleware = [];

  // 安全性
  config.security = {
    csrf: {
      enable: false,  // 关闭 csrf 允许所有访问
      ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    },
    domainWhiteList: ['*'],// 配置白名单
  }
  // 加密
  config.jwt = {
    secret: 'guolihan'
  }

  exports.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: '3306',
    database: 'zhangben',
    username: 'root',
    password: '1234',
    define: {
      timestamps: false,
      freezeTableName: true,
      underscored: true,
    }
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
