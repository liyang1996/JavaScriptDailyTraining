//可以理解为在其他函数中调用的函数
let hd =[1,2,3,4,5];
hd.map(function (index,arr) {
    arr[index]+=10
})
console.log(hd)