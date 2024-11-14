## 这是一个用来查看自我联系git的文件夹
  - 首先我将在本文件夹下初始化一个git仓库
  - 1 使用  git -init 语句
  - 2 使用 git status 语句   //查看当前文件的状态
  - 3 使用 git remote -v    //查看当前的远程仓库，发现没有配置，需要配置
  - 4 使用 git remote add origion https://github.com/123Glh/lesson_hm.git  //配置远程仓库
  - 5 使用 git add .\readme.md   //将该文件添加到暂存区
  - 6 再次使用 git status 语句   //查看当前文件的状态
  - 7 使用 git push origin master  //将本地仓库推送到远程仓库