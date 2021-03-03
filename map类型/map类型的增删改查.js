let obj={
    name:'hdcms'
}
let map=new Map();
map.set(obj,'aaaaa');//map要用set添加，而且前边的为键，后边的为值
map.set('name','bbbbbb');
map.get(obj);//获取
map.delete(obj)//删除成功了返回true，失败了返回false
map.clear()//清空，没有返回值
map.has(obj)//has用于检测
console.log(null==undefined);//true
     