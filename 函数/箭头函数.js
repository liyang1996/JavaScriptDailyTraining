// let hd=[1,2,3,45,5].filter(value => {
//     return value<=3;
// })
let hd=[1,2,3,45,5].reduce((a,b)=>a+b);
//递归函数使用时他没有名字，回调不方便，构造函数，时间处理器的时候不方便使用，要考虑作用域，考虑到this
console.log(hd);
