// 共享私有变量
console.log("共享私有变量");
let uniqueInterger = (function () {
  // 定义并调用
  let counter = 0; // 下面函数的私有状态
  return function () {
    return counter++;
  };
})();

console.log(uniqueInterger()); //0
console.log(uniqueInterger()); //1
let a = uniqueInterger();
let b = uniqueInterger();
console.log(a); //2
console.log(b); //3
console.log("----------------------------------------");
console.log("不同的私有变量");

// 不同的私有变量
function counter() {
  let n = 0;
  return {
    count: function () {
      return n++;
    },
    reset: function () {
      n = 0;
    },
  };
}
let c = counter(),
  d = counter();
console.log(c.count()); //0
console.log(c.count()); //1
console.log(d.count()); //0 它们分别计数
console.log(d.count()); //1 它们分别计数
c.reset(); //重置c
console.log(c.count()); //0 重置了c
console.log(d.count()); //2 但是没有重置d
/**
 * 严格来讲，所有的JavaScript函数都是闭包，
 * 因为JavaScript函数使用的是词法作用域，
 * 词法作用域的含义就是当定义的函数执行的时候，
 * 函数所使用的其实是定义的时候生效的变量作用域，
 * 而不是调用的时候生效的变量作用域，
 * 而JavaScript为了实现词法作用域，
 * 函数对象不仅包含了内部代码，还要包含对函数定义时候的作用域的引用，
 * 像这种函数对象与作用域组合起来解析函数变量的机制，在计算机领域就称作闭包。
 */
