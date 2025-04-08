function hongbao(total, num) {
  const arr = [];
  let restAmount = total; // 剩余金额的初始化
  let restNum = num; // 剩余人数的初始化

  for (let i = 0; i < num - 1; i++) {
    let amount = parseFloat(
      Math.random() * (restAmount / restNum * 2 - 0)
    ).toFixed(2); // 随机生成金额，保证每个红包的平均值不超过平均值的两倍
    restAmount -= amount;
    restNum--;
    arr.push(amount);
  }
  arr.push(restAmount.toFixed(2)); // 最后一个红包的金额为剩余金额
  return arr;
}

console.log(hongbao(100, 10)); // 输出随机生成的10个红包金额数组