//定一个symbol
let hd = Symbol('性感美女，在线发牌');
console.log(typeof hd);
//不能把它当成对象用，只当成数据，一个永远不会重复的数据
console.log(hd.discription) //提取symbol描述

let jiaoshou = Symbol.for('toujinggai');
let hualong = Symbol.for('toujinggai'); //一个symbol反复被使用就可以用symbol.for
//jiaoshou 和hualong 是一个内存地址和一个symbol
//用symbol.for声明一百次她也是一个

console.log(Symbol.keyFor(jiaoshou)); //获取symbol的描述
//用symbol.for()定义的symbol 会在全局进行保存


//symbol的使用
let user1 = {
    name: 'liyang',
    key: Symbol()
};
let user2 = {
    name: 'liyang',
    key: Symbol()
};

let grad = {
    [user1.key]: {
        java: 100,
        css: 100
    },
    [user2.key]: {
        java: 55,
        css: 35
    }
}
console.log(grad); //只打印后边的liyang，后边的会把前边的覆盖掉
//对象使用变量的时候要用[]
console.log(grad[user1.key]);