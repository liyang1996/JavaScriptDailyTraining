let set= new Set(['hdcms','mukewnag']);//set没有索引，value和key是一样的
set.forEach((element,key,set) => {
    console.log(set)
});
console.log(set.values());
//什么是迭代对象？
// 凡是部署了Symbol.iterator属性，都称之为部署了遍历器接口，返回一个遍历器对象；
// 对于原生部署了Iterator接口，for...of会自动去遍历，如果没有的话（比如对象），
// 都需要自己在Symbol.iterator属性上面部署

//  总结： 一个数据结构（数组、Map、Set，某些类似数组的对象——比如arguments对象，
// DOM NodeList对象，Generator对象，字符串等），才可以被for...of循环遍历。 
// 换句话说就是for...of 循环内部调用的是数据结构Symbol.iterator方法

