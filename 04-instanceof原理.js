/*
* instanceof原理
*
* instanceof 操作符用于检查一个对象是否属于某个特定的 class。同时，它还考虑了继承。
*
* 语法
* obj instanceof Class
* */
class Rabbit {}
let rabbit = new Rabbit();

// rabbit 是 Rabbit class 的对象吗？
console.log( rabbit instanceof Rabbit ); // true

/*
obj instanceof Class 算法的执行过程大致如下：

1、如果一个类有静态方法Symbol.hasInstance，那就直接调用这个方法：
Symbol.hasInstance用于判断某对象是否为某构造器的实例。

2、大多数class没有这个方法，在这种情况下，标准的逻辑是：检查 Class.prototype 是否等于 obj 的原型链中的原型之一。
换句话说就是，一个接一个地比较：
obj.__proto__ === Class.prototype?
obj.__proto__.__proto__ === Class.prototype?
obj.__proto__.__proto__.__proto__ === Class.prototype?
...
如果任意一个的答案为 true，则返回 true
否则，如果我们已经检查到了原型链的尾端，则返回 false
* */
