# react 项目介绍

- 特色
- 沟通和长处
- 亮点(AI) 和 难点 (性能优化，webworker,复杂组件，设计模式...)
- 登录退出 频繁 刷新token
- url method 设计比较随意 get/post 区别 ， restful 重新设计
- 写页面 rem 换算 很麻烦 ， 找到了 px to rem
- 全栈能力 同源策略，vite 代理 cors
- 稿子
  - 表达逻辑
  - 引导八股

## 使用大模型的方式
- openai 接口
- ollama 拉取开源模型
- huggingface transformers 魔搭社区 pipeline
- webgpu 进行浏览器端本地大模型的运行
- webworker 进行大模型的运行

## 项目亮点
- web 端侧大模型 deepseek-r1- 蒸馏过的 15 多亿的参数
- tailwindcss 来加速开发

## 项目难点
- webworker 
  js 单线程 通过浏览器 创建一个独立的worker线程 (复杂的计算)
  - 实例化
    new WebWorker('worker.js')
  - 消息机制
    postMessage()
    onmessage()

## progress stateless 组件设计

## LLM 加载
单例模式
- tokenizer model  // 分词器 模型
- initialize download progress done

## 设计下 progress 需要的响应式数据