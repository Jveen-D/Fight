/*
* 解释一下原型链
*
*
* 原型
* 在 JavaScript 中，对象有一个特殊的隐藏属性 [[Prototype]]，它要么为 null，要么就是对另一个对象的引用。该对象被称为“原型”：
* 一个对象引用另一个对象，另一个对象又引用另外一个对象，这就是原型链
* 当我们从 object 中读取一个缺失的属性时，JavaScript 会自动从原型中获取该属性。在编程中，这种行为被称为“原型继承”。
*
*
* 原型链有两个限制
* 1、引用不能形成闭环。如果我们试图在一个闭环内分配__proto__，JavaScript 会抛出错误。
* 2、__proto__可以是对象，也可以是null，其他类型都会被忽略
* 3、一个对象只能有一个[[Prototype]]，一个对象不能从其他两个对象获得继承。
* */
let animal = {
    eats:true,
    jumps:null
}
let rabbit = {
    jumps:true
}
rabbit.__proto__ = animal
console.log(rabbit.eats)

// 关联知识点
// Object.keys 只返回自己的 key
console.log(Object.keys(rabbit)); // jumps

// for..in 会遍历自己以及继承的键
for(let prop in rabbit) console.log(prop); // jumps，然后是 eats
//内建方法 obj.hasOwnProperty(key)：如果 obj 具有自己的（非继承的）名为 key 的属性，则返回 true。
console.log(rabbit.hasOwnProperty('jumps'))
console.log(rabbit.hasOwnProperty('eats'))


console.log( rabbit.jumps ); // true

delete rabbit.jumps;

console.log( rabbit.jumps ); // null

delete animal.jumps;

console.log( rabbit.jumps ); // undefined
