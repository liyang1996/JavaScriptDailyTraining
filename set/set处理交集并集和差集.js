let a =new Set([1,2,3,4,5]);
let b= new Set([4,5,6,7,8]);
//合并成数组并集
console.log(new Set([...a,...b]));
//差集寻找b里不含有a的item，
//交集是共同拥有的，找到b里含有a的item
console.log(
    new Set([...a].filter(function(item){
        return !b.has(item);
    }))
)
