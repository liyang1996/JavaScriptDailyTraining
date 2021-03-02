class Cach {
  static data = {}
  static set(name, value) {
    return this.data[name] = value;
  }
  static get(name) {
    return this.data[name];
  }
}
Cach('liyang', 'abcd');
console.log(cach.get('liyang'));
let user = {
  name: 'apple',
  description: 'ren',
  key: Symbol()
};
let cart = {
  name: 'apple',
  description: 'gouwuche',
  key: Symbol()
};
Cach.set('apple', user);
Cach.get('apple', cart);
console.log(Cach.get(Cach.get(user.key)));