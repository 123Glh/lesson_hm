# React NoteBook 全栈

- npm i react-router-dom -S
  -S --save 一直依赖  react-router-dom@7
  --save-dev -D 开发阶段依赖
- 项目阶段
  - 开发阶段 development
  - 测试阶段 test 其他同事电脑上 没有环境 npx
  - 上线阶段 production 打包 -> 项目部署 -> dns ->上线

- 编程风格
  - react 组件 由函数组件jsx文件 + 样式文件css 组成
    - 组件目录大写
    - 组件声明文件小写 名字为 index.jsx
     引入的时候 直接引入组件目录即可 组件类的作用 同时不用去引入 index.jsx
  - return (JSX) dom树的对齐，优雅
- 页面级别组件 views
  - 首页
    Home.vue
  - es6 module 的语法
    import React, { useState } from 'react';
    default 解构的引入
    import * as React from 'react';

    as 起别名
  
  - key 的用法
    循环输出组件，需有给唯一的 key 值 需要唯一
    update 性能

  - 选择框架
    - zarm 移动端 react ui 组件库
      指定 3.1.2 版本 npm i zarm@3.1.2
    - 引入样式
    - 引入配置 ConfigProvider theme primaryColor
    - 主题定制 theme primaryColor

  - npm run build
    - 上线之前先打包
    - dist/ 结果目录
      - src/ 开发目录
      - 不需要注释.换行等 只需要浏览器运行就好
        文件小 压缩 传输更快
      - 组件打包成js文件 css打包成css文件
        性能优化 http 并发数 一个js文件
        - 依赖关系
          - 不需要模块化
            被依赖的放在上面 依赖的放在下面
          - 递归依赖关系
          - 打包成一个js文件
      - vite 很快
      - 截图
        size gzip 大小 http 主动启动 gzip 压缩传输的
        底层事 tcp/ip

- vite
  - 按需加载 vite-plugin-style-import

- less stylus css 预编译语言
  - 快
  - less
    嵌套
    &
    :global 选择器在用于局部作用域的 LESS 文件中定义全局样式，使指定的 CSS 规则应用到全局范围，而不受局部作用域限制这在模块化组件开发中非常有用。
  - 变量、嵌套、混合函数
  - module css 
    - style.module.less
    - 支持 css 模块
      - vite 声明 less -> 解析
      - {s.index}
  - px2rem

- 移动端适配
  rem 10rem = 宽度
  - lib-flexible rem 适配
  - postcss-pxtorem 包 自动化px 转 rem 提高效率
    - PostCSS 允许开发者通过一系列插件来处理和增强 CSS 文件，使其具备更高的可维护性、兼容性和性能。

- axios 配置
  - baseURL
    前后端分离 前端访问的是后端的接口 一般都会以/api 开头
    方便 baseURL 统一配置
    - axios + vite proxy
      跨域问题 新解决方案
  - 请求、响应拦截器
    - 统一的 token 设置
    - 统一的错误提示
      401 404 500 ！200
    - res 丰富的 状态码 config res ... 库
    - return res.data 直接返回数据
  - cookie
    - 小饼干
    - key=value;key2=value2;
    - 5kb 
    - expires 过期时间
    - domain 当下域名的子域名都可以访问
    - path 路径 / 域名下所有路径都可以访问
    - secure 安全
      https 协议下才可以访问
      XSS 攻击
      跨站脚本攻击
      黑客在你的网站上注入恶意的脚本代码，当用户访问你的网站时，黑客的脚本代码会被执行，从而窃取用户的信息或者进行其他恶意操作。
      使用 &lt和&gt 标签来表示 < 和 > 符号。
    - httpOnly 只能http访问 js 没有办法获取   http 协议本身是无状态的 medthod url 返回结果一定一样
    - 前端设置 cookie
      document.cookie = 'key=value;expires=时间;path=路径;domain=域名;secure;httpOnly';
    - 后端设置 cookie
      res.setHeader('Set-Cookie', 'key=value;expires=时间;path=路径;domain=域名;secure;httpOnly');

## 业务开发
- NavBar
  - component 公共组件
  - zarm TabBar TabBar.Item
    activiteKey itemKey
  - change setActiviteKey
- react-router-dom
  useNavigate hook
  navigateTo('/user')
  必须放到 router 里面
- icon
  - iconfont 定制
- showNavBar
  - 默认是 false 路由切换 根据路由路径 showNavBar = true
  - 伪代码 业务复杂或不太熟悉时可以以使用
  - useLocation 拿到当前的路由 解构出路径
  - useEffect 监听路由变化

- react hooks?
  - useState 响应式
  - useEffect 副作用 (生命周期)
  - memo 缓存 组件
  - useMemo 缓存 计算结果
  - useCallback 缓存函数
  - react-router-dom useNavigate useLocation
  - 函数式编程思想 use hooks 很方便的作用
- react-router-dom
  BrowserRouter HashRouter
  Router Routes Route 组件
  useNavigate useLocation 属于路由 路由改变更新
  useEffect 监听路由变化 依赖

- CustomIcon 的组件
  Icon.createFromIconfont
- 单页应用 SPA sigle page application 看过去像一个页面 移动端
  - 传统的 a 标签 刷新页面 服务器重新渲染 所有的html 白屏 慢 体验不好
  - vue/react 优化体验
    - 不能白屏 不要去刷新整个页面 NavBar
      HashRouter HistoryRouter 支持 hashChange pushState
      不用 a 标签 由 router 统一管理
    - Routes route-view  一副牌 看到最上面的那张牌
- react props 类型约束
  - prop-types
  - 函数组件对象 propTypes 属性
  - PropTypes.bool

- css
  - react module css
  - less
  - iconfont 性能优化
  - linear-gradient   线性渐变色 代替 简单的背景图

- 功能需求分析
  - 登录、注册功能
    - 切换下面的表单 useState type login/register
    - onclick 切换 type
    - type activite
    - useEffect + useLoacation  url/login/register

- 项目用了哪些包
  - classnames 动态类名的逻辑安排

- 记账产品
  - 账单首页
    - 时间和类型 查询
    - 账单查询
  - 可视化账单 数据
    echarts 图标展示
  - CRUD 用户 账单？
    - jwt
    - 跨域
    - 文件上传
  - 我的

## 用户页面的的静态开发
  - 行内样式
    {{"":"",}}
  - nth-of-type 会根据元素的类型进行计算
  - align-self:baseline; 主轴是纵轴时，对齐子元素的宽度

  - react 和 vue solt 和 props.children 区别
    - 以 modal 组件为例的 通用组件  万达 负责招商
    - 需要强大的定制性 入驻
      title footer props string | JSX 传入
    - content 表单|JSX ... slot(插槽，具名插槽)

## AI 特性
  - prompt 提效的模板
  假如你是前端工程师 使用react + javascript 技术栈， 请根据上图分析功能模块和交互细节 给出要开发的功能点， 难点 和预计需要的开发时间。 只需要开发前端， 后端不需要考虑。

## 首页静态开发
- 先想清楚，再动手 ai
  了解需求的 prompt 模板
- 用户的账单列表
  - 所有 ， 按时间排序 倒序 分页
  - 按类型查询(支出|收入)
  - 按月份查询
- 按页面的统计 响应式
- 按日期分组
  列表 细节，并进行支出和收入的统计
- 交互
  - 类型切换的弹出
  - 日期的弹出
  - 新增支出的弹出
- 开发时间？
- list 列表业务
  - 比较复杂，两重循环
  - 按日期分组
  - 设计稿， prompt ai 来拿假数据 给他个例子
  假如你是一个前端工程师，请基于const [list, setList] = useState([
    {
      bills: [
        {
          amount: "25.00",
          date: "1740398609507",
          id: 911,
          pay_tye: 1,
          remark: "",
          type_id: 1,
          type_name: "餐饮"
        }
      ],
      date: '2025-02-24'
    }
  ]) 数据格式， 根据上传图片，帮我组织list 初始化的数据 并返回给我， 其他的不做。
- 封装了 Bill 组件 
  - 复用
  - 模块化 index 太复杂 代码不要太多 方便维护，
  - prop-types 类型约束 强大
- utils
  - 封装公用的js函数或配置

# nodebook 后端api服务

## egg.js 阿里的开源框架
- koa 极简
  - middlewares 洋葱模型 函数
  - http listen
  - ctx
- 企业级开发 中大型项目
  mvc
  npm init egg (--type=simple)
  后台开发的模板
  - app 目录应用开发的主目录
  - 约定大于一切
    - router.js 后端路由

  - URL 的构成
    queryString  params
    http://localhost:3000/user?id=1

- csrf 攻击
  - 拦截？
    postman 不是用户
    userAgent

- post 请求体的格式
  - form-data 有附件
  - x-www-form-urlencoded key=>value
  - json 复杂数据结构
- get / post 区别

## 开发流程
- idear 创意
  - aigc 结合
- 需求分析
  - 用户需求
  - 功能点
- 建立数据库
  - 设计表结构
- 前端开发
  - react
- 后端
  - egg.js
- 测试
- 部署上线

   CREATE TABLE IF NOT EXISTS user ( 
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE, 
    ctime VARCHAR(100) NOT NULL, 
    avatar VARCHAR(100), 
    signature VARCHAR(100), 
    password VARCHAR(100) NOT NULL 
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS bill (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pay_type INT,
    amount VARCHAR(100),
    date VARCHAR(100),
    type_id INT,
    type_name VARCHAR(100),
    user_id INT,
    remark VARCHAR(100)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

## 代码开发风格的一部分

- AI编程工具的使用
  - MarsDode
  - Cursor / Trade
  - prompt engineering
  - "交互" 前端不可替代
  - 多语言 低代码 快速学习
  - 不只是向木开发前 prompt 生成项目
  - 细节功能 喂伪代码 aigc代码更靠谱

- mysql
  - mysql2 数据库驱动
  - egg-sequelize orm 框架
    不需要写sql 直接对象操作
    封装了sql
  - service
    CRUD
  - model
    user

- egg.js api 服务
  - 路由
    http 协议
  - controller
    extends Controller
    参数校验、业务逻辑...
    返回接口需要的json
  - model
    模型定义 table -> model
  - service
    数据库操作 CRUD
  - view
    api 服务， 后端不负责界面，react 负责

- 密码注册
  - 密码加密
  单向加密、不能存明文
  - jwt json web token
    {
      id: 1,
      username: 'admin',
      exp: 1681944345,
      lev:'lv5'
    }
    jwt sign token
    后端签发
    - secret 加密 服务器端才能解开
    - 40几位的加密串
    前端 loacalStorage 存储
    axios 请求 拦截在请求头中携带 token
    authorization: Bearer token   token(localStorage)
    后端 verify 验证  token -> json  user

    - egg-jwt jsonwebtoken 插件

- 登录
  - 前端 Login 组件 submit
  - api/login 全部的请求都在这
    /login { username, password }   api已经在 baseUrl 了
    - URL -> /api/login
    - /api 后端提供的接口的标志 前后端分离 防止和前端路由冲突
  - axios 请求 被vite 配置的server拦截
    proxy 解决了跨域问题
    rewrite /api 
  - 后端提供接口，后端也可以不只是提供接口 自己的 MVC

- 修改用户slogan
  全栈功能  前端修改表单
  后端 Update + MVC
    - 先后端
      - 提供一个修改slogan的接口
        - 路由
          restful api 一切皆资源  设计url的一种规范
        - 中间件  鉴权
          拦在控制器之前 token -> verify user 挂载在ctx上
        - 控制器 controller
        - service
          - model 已创建
          - orm sequelize
          数据库操作
        - apiFox/postman
    - 再前端
      - 路由
      - userinfo 组件
      - api   editUserInfo