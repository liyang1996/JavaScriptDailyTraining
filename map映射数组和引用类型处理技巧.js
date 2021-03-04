
    //map映射可以理解为复印一张纸，复印的过程中可以进行二次处理；
    //对于数组包对象的引用类型，他们取的是内存地址，会改变原数组值，如果不想改变，用Object.assign()
    //对于数组里包含基本数据类型的，复制然后修改，不改变其原值
    let arr = ["hdcms", "aaaaa"];
    let hd = arr.map(function (arr, value, index) {
        value = `liyang${value}`;
        return value
    })

    console.log(arr);

