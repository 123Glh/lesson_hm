假设你在开发一个新功能，不太方便添加到仓库中，但是一个 main 紧急的 bug 需要去完成。

- feature1
  a.txt
  b.txt
  不能直接 add commit

- main
  停下 -> fix bug

- git stash 
  暂时保存代码
- git stash list

- git checkout main
  ......

- git stash pop
  恢复代码