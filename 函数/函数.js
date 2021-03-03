let fun =new Function('title','console.log(title)');
console.log(fun);
function fun(params) {
    console.log(params)
}
fun('asdf');

//let一个函数，这个函数是不会往windows里压的，var一个函数就会往windows压
//函数尽量不用独立存放，使用类包含



//匿名函数
