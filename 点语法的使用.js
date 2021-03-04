//收 和放
let hd=[1,3,4,5];
let [a,b,c]=[...hd];//释放
let [d, ...edu]=[1,2,3,4]//吸收1复制给a，234复制给edu

function sum(...arg) {
    console.log(arguments)
   return arg.reduce((a,b)=>  a+b);
}
console.log(sum(1,2,3,4,5)) 
//展开语法当作函数参数使用时，应该放在后边
