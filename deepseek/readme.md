## 春招执行方案

- 时间
  3月-5月
- 大厂最容易
  - 语言能力
  - 面试能力
  - 算法
- 3月份-4月份  面试新手期 4月份找一份远程实习( AI远程实习 )
  - 第一个目标点，拿下一个offer 150一天
    - 年前的vue项目模板 旅行 80% 20% 修改
    - transform + react
    - node + 全栈 + vue/react 10天
    - leetcode 100+ 每天 3道+
  - 第二个目标点，找到实习，面大厂之前有一份实习经验 (通过简历)
  - 4-5月份边实习边提升面试能力
  - 百度/字节 大厂 + 未来的AI大厂
  - 5.1 润出去 - 9 月份  4月+

## deepseek
- 性价比高
  百万 token 1 元
  tokens 提问以及返回 按token计费
  token 分词

  参照物 gpt4 o1 每百万 280人民币 99.9% 省了

- 为什么省
  - OpenAI 堆算力 GPU
  - 新的算法 甚至可以绕开 英伟达 cuda 编程
  - DeepSeek v3 2048块 H800 557.6万美元 ， meta llama3 是 deepseek 的 11 倍
    openai No.1 闭源的
    llama3 是开源的 No.1
  - 英伟达股价大跌
  - 用户 -> 赚钱 -> AI

## DeepSeek AI 全栈APP
  前端 + 后端 + LLM = AI fullstuck

- ai应用集合项目
  coze 工作流 + ai应用
  deepseek openai 的替代品 prompt
  langchain rag 应用开发

- react(chatbot)
- node koa
  向前端提供 api
- LLM 请求 (deepseek + ollama) 302.ai
  离线大模型调用

  react <-> koa <->LLM
- 大前端(前后端分离)
  - 前端包着后端
    - 前端:5173
      - react 组件
    - 后端:3000
      - koa
      - http 服务 3000 伺服状态
      - 路由 /chatai message ?
        - npm i koa-router(周边生态)
        - 实例化路由对象 new Router()
        - router.Method('/path', async(ctx)=>{

        }) 注册路由
        - ctx 上下文对象 request + response
        - ctx.body 设置响应体
    - 跨域 同源策略

- ollama
  - 302.ai ai转发 online 大模型
  - 本地访问大模型的可能
    某大厂,开源的deepseek 
    ollama pull deepseek-r1:7b 拉取到本地  offline 调用
    模型的微调 自己的业务或需求, 重新的练一下deepseek
  - ollama pull llama3.2:listest 拉取到本地
  - const add = (x,y) => x+y 编程
    LLM(巨大的参数) nlp + 全球的知识 (机器学习) + transformr机制 => AIGC 回答  大模型函数
  - ollama run deepseek-r1:1.5b 运行
    command line chatbot
    全栈应用的方式来通信
    - 11434 端口伺服
    - /api/chat 聊天的方式LLM 响应
      /api/generate 生成的方式LLM 响应
    - http 请求支持
  - 参数 (处理问题的规模) 尺寸
    内存(8G) 显卡 等硬件相关
  - 集成 deepseek 能力 可以实现了

- koa
  路由定义好,函数的方式来处理从这个路由的用户,参数校验,逻辑功能,LLM axios 请求
  返回资源,结束请求
  - 基于koa,koa-router 通过 axios 向 ollama 11434/api/chat 发送请求,获得LLM 响应
  - 封装AI LLM接口

- react 去 axios 向koa AI LLM接口发送请求