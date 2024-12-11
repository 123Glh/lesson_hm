class Solution(object):
    def coinChange(self, coins, amount):
        """
        :type coins: List[int]
        :type amount: int
        :rtype: int
        """
        F=[-1]*(amount+1)
        F[0]=0
        for i in range(1,amount+1):
            for j in range(len(coins)):
                if(i-coins[j]>=0 and F[i-coins[j]]!=-1):
                    if(F[i]==-1):
                        F[i]=F[i-coins[j]]+1
                    else:
                        F[i]=min(F[i],F[i-coins[j]]+1)
        return F[amount]
solution=Solution()
print(solution.coinChange([2],3))