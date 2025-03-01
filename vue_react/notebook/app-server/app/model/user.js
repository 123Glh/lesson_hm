'use strict'

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize; // 数据类型
  const User = app.model.define('user', {
    id: {
      type: INTEGER, // 数据类型
      primaryKey: true, // 主键
      autoIncrement: true, // 自增
    },
    username: STRING(100), // 用户名
    ctime: STRING(100), // 创建时间
    avatar: STRING(100),// 头像
    signature: STRING(100),// 签名
    password: STRING(100),// 密码
  })
  return User;
}