let arr = [1, 2, 3, 3, 34, 4, 4];
let seta = new Set(); //set中不可以有重复的对象,类型相同值相同是不行的
seta.add(1);
seta.add('2');
console.log(seta);
//Set是一个构造函数，可接受数组，或任意有interator接口的数据类型作为参数,返回一个Set 数据结构。

let set = new Set([1, 2, 3, 4, 5]) //可以直接加到set()里，也可以add()加进去

//对象
let obj = {
    1: 'liyang',
    '1': 'chenruolin'
} //对象里属性都会转化成字符串

let noooame = {
    obj: 'liyang'
}
console.log(noooame.obj); //正常打印obj，因为这时候obj是个字符串

let newobj = {
    [noooame]: 'liyang' //报错，不可以让对象变成属性，系统会把对象变成字符串，相当于noooame.tostring（）
}
console.log(newobj[noooame.toString()]);