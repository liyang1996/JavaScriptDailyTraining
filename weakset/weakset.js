let set =new WeakSet();
//和set 一样，不允许有重复，但是里边只能是引用类型
//WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。
//首先，WeakSet 的成员只能是对象，而不能是其他类型的值。
//其次，WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用

//weakSet没有size属性，也不能被遍历。

//weakSet 除了没有clear方法，其他和set一致