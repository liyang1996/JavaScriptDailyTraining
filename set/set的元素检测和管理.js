let set=new Set(['hdcms','houdunren']);
set.delete('hdcms');//删除某一个元素，返回一个bool类型
set.clear()//彻底清空一个元素，返回undefined
console.log(set.size);//判断元素的数量
console.log(set.has('hdcms'));//判断是否存在某一个元素

console.log(set);//Set(5) { 'h', 'd', 'c', 'm', 's' },把字符串展开
let aiiay=[1,2,3,4,5,6,54,3];
aiiay= new Set([...new Set(aiiay)]); 
console.log(aiiay)
