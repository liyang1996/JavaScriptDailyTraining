let symbol = Symbol('this is a symbol');
let hd = {
    name: 'liyang',
    [symbol]: 'houdunren'
}
for (let a in hd) {
    console.log(a) //无法打印symbol，因为他是受保护的
}
for (const key of Object.getOwnPropertySymbols(hd)) {
    console.log(key); //遍历symbol属性专用Object.getOwnPropertySymbols(hd)
}
for (const keys of Reflect.ownKeys()) { //使用Reflect.ownKeys()遍历所有属性
    console.log(keys);
}

let site = Symbol();
class User {
    constructor(name) {
        this.name = name;
        this[site] = '后盾人'
    }
    getname() {
        return `${this[site]} ${this.name}`
    }
}
let hds = new User('liyang');
console.log(hd.getname());