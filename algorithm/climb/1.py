import time
class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        # 这种方法超时了
        if(n==1):
            return 1
        elif(n==2):
            return 2
        return self.climbStairs(n-1)+self.climbStairs(n-2)
        
        # 动态规划 用空间换时间 这就是带着记忆的递归
        # if(n==1):
        #     return 1
        # elif(n==2):
        #     return 2
        # a=[0]*(n+1)     # a[i] 表示走到第i阶的方法数
        # a[1]=1
        # a[2]=2
        # # 迭代
        # for i in range(3,n+1):
        #     a[i]=a[i-1]+a[i-2]
        # return a[n]
solution=Solution()
print(time.time())
print(solution.climbStairs(50))
print(time.time())