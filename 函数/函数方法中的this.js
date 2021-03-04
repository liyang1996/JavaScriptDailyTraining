//this在函数中使用的状态
let hd={
    name:'aaa',
    show:function() {
        return this.name//这里的this指对象本身
    }

}
console.log(hd.show())
console.log(this);//window
console.log(window)//window
console.log(this==window)//true

//如果函数是对象的一个类方法，this指向对象，如果只是一个普通的函数，this指向window（全局）
name='这是window的name'
let edu={
    sit:'aaa',
    show:function() {
        function runder() {
            console.log(this.name);//这是window的name
        }
        runder()
        return this.name;
    }

}
