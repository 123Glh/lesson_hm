function mySetInterVal(fn, a, b) {
  let timer = {};
  function setOneTimer(fn, a, b) {
    timer.id = setTimeout(() => {
      console.log(a);
      fn();
      setOneTimer(fn, a + b, b);
    }, a);
  }
  setOneTimer(fn, a, b);
  return timer;
}
function myClear(timer) {
  clearTimeout(timer.id);
}

// test
const timer = mySetInterVal(() => {
  console.log('hello');
}, 1000, 2000);

setTimeout(() => {
  myClear(timer);
}, 10000)