let hd={oo:'liyang'};//开辟一个内存空间，hd用这个内存空间的地址
let pony=hd;//pony同样引用了对象的地址
hd=null;//hd不用对象的地址了，但是pony还用
pony=null;//pony也不用这个对象的地址了，对象就作为垃圾被回首了
let arr=[hd];
console.log(arr[0]);//可以打印不出来，因为已经被回收 
