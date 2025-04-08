# 大文件上传

- 技能点？
  - 切片
    - 体验 快、稳定
    - 断点续传
      blob
    http 1.1 管道化
    多路复用(二进制帧)  http 2.0 并发 更快

- 切完片后 到服务器的是啥？
  - 切片
  - 合并

- 后端 合并切片
  fs.createWriteStream()  写入流
  - 前端
    html5 blob file.__proto__ Blob slice 切
    FormData
    html5 特性？
  - 后端
    - multiparty 中间件 拿到 post 请求体
      区别于一般的表单请求，附件
    - 临时放切片
      写入？
    - 合并 fs stream
    - 删除切片
    - fs-estra 中间件
      fs-extra 是 fs 的扩展文件系统模块，提供更多实用便捷文件操作方法。
    - promise.all
      可以合并了

- 合并切片
  - /merge 路由

- 快传
  - 已经在服务器 ？
  - 标识？
    hash 唯一 shoudUpdate ？做一个标记
- 断点续传
  - 之前没传的切片
  - 失败的切片
  verfiry 返回的 uploadedChunk filter
  将未完成的切片(比较size)和未传(不在返回的uploadedChunk中)的切片 重新上传
- 暂停上传
  - 不是所有的切片都上传
    3G 限流？
    Promise.all 用，控制并发
    Promise.all([Promise.all()])
  - 切片 没上传 isPause
  Promise.all 下手
  AboutController about
- promise 限流
- web worker html5 多线程
  hash 计算有点耗时
  离线放到 worker 中计算不会阻塞主线程，更快