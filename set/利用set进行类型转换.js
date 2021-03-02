let set = new Set(['hdcms', 'houdunren']);
console.log(Array.from(set));
console.log([...set]);
let hd = new Set('123456789');
let arr = [...hd].filter(function (item) {
    return item < 5
})
hd = new Set(arr)
console.log(hd);
let namea = new Set();
console.log(namea);