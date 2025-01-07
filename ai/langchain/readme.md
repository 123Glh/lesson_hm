# langchain AI 框架开发

- modelscope 魔搭
  - 国内顶级的AI社区，找开源模型
  - 对标 HuggingFace
- python notebook  .ipynb
  - pythoon 适合nlp 、 数据分析
  - 算法idea\试下某个model、随便写 可运行

- 为何langchain
  - 方便在各个大模型之间切换
- langchain_openai
  - 让我们使用 openAI 更方便, AI应用保持优秀
  - model 是可以抽象的，方便切换
  - 好快
- langchain.schema
  - 定义了langchain 中的数据结构，预置
  - HumanMessage
  - SystemMessage

- langchain.prompts
  - 进入AI全栈领域的标志
  - 核心模块，prompt 是主要工作
  - PromptTemplate
    - from_template 生成prompt模板
    - format 生成 prompt