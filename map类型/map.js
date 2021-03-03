//map可以将对象，函数，字符串，标准类型可以作为健名
let obj={
    name:'hdcmd'
}
let hd={
    [obj]:'houdunren'
}
console.log(hd[obj.toString()]);
console.log(obj.name);//name是数字，但是实际是字符串 如果是数字的话会变成字符串


let map=new Map();
map.set('name','houdunren');
map.set(function(){},'hdcms');
map.set({},'houdunren');
map.set(1,'houdunrena');
console.log(map);

let newmap=new Map([['hdcms','kaiyuan','zaixianjiaocheng'],[aaa,bbb,ccc]]);//和Set很像
console.log(newmap);


//这部分操作叫链式操作
let str='abcd';
console.log(str.toLowerCase().substring(0,3));

