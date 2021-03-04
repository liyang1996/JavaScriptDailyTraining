//不断的重复做一件事，找到一个合适的时机退出递归，一张动图，不断的重复做一些事情
//阶乘，5的阶乘 5*4*3*2*1
function factorial(num) {
    return num==1?1:num*factorial(num-1);
}
console.log(factorial(5));

function sum(...arg) {
    return arg.length==0?0:arg.pop+=sum(...arg)
    //console.log(arg)
}
console.log(sum(1,2,3,4,5,6,7));

//递归绘制五角星
function star(num) {
    return num==0?'':document.write('*'.repeat(num))||star(--num);
    
}
star(5);


//递归附加参数使用技巧

