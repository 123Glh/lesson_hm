const family = {
  father: '👨',
  say: function () {
    console.log(this.father);
  }
};
family.say(); // 输出 👨（this指向family）
const lostChild = family.say;
lostChild(); // 输出 undefined 😭（this指向全局）