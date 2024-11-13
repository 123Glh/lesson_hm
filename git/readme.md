- git 有哪些命令？
  版本控制软件   多人协作， 几个亿的项目
  写项目？ 电脑坏了  保存代码的版本且安全   团队间代码的协作  
  git 帮我们在本地 管理代码， 远程仓库(分布式)
  常用操作，自我代码管理和简单的协作
  - git init    //初始化
  把代码加入仓库分3步
  - git add .   
  - git commit -m "注释"
  - git push origin master

  - git branch 分支名
  - git checkout 切换分支
  - git merge 合并分支

## 大厂需要的git 能力
  - git 是必备技能
  - 高级技巧，考点
  - git 文档内置
    git help   常用的git 命令
    git help -a 列出所有的名单
    vi 编辑器   :j 向下翻页     :k 向上翻页    ：q 退出
    git help add   深入了解某个命令
    你是如何了解git命令的作用和参数的？


## 代码仓库
  文件夹 -> 开发目录(网站) -> 代码仓库

  - 好处
    项目代码的版本(version)  git关注的是代码的版本
    时光穿梭机 文件的任何版本 有时候我们要回退
  - git 仓库里存的是啥？
    文件？ 文件的版本(对)
    拿着相机一直拍
    .git 目录 就是 仓库
    git 相关的内容就放在.git 目录里
  -git config 配置 操作留下了责任人 ， 多人协作的思想
  老板就知道谁提交的代码？
  git config --global user.name "xxx"
  git config --global user.email "EMAIL"  本地 远程 对比
  配置， --global 全局配置

  - git status 
    查看当前仓库的状态
    on branch main(master) 主分支上 默认分支

    untracked file 未跟踪的文件  是指该文件还没有纳入版本的管理

    use  commit <file>  使用这条语句，纳入版本管理
添加到仓库是一个比较严谨的事情
  - git add <file>
    将文件的当先版本先添加到暂存区 
    git status

  - 为什么需要暂存区，仓库 两个概念？
    - 后悔药
    - 分几次add，最后一次性commit
      进货，有一辆买菜车(git add 多次) 买完了 (git commit 一次) 买好菜了

    
  - git status 
    让我们了解当前仓库的状态，摸鱼后还能人间清醒

  - git log
    代码提交记录  --oneline   简化输出，一行输出

  - 暂存区 仓库 
    - 一次性多个文件多次加入暂存区  后悔药  组成一个提交任务 使得代码文件之间的联系更明显
    - 一次commit -m 要规范 讲清楚任务
    - 不要随意提交commit ， 围绕开发需求
      一般一个上午 2-5次 commit