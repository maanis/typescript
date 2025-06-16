"use strict";
var _a;
console.log('Interfaces');
let user = {
    name: 'trtr',
    age: 22,
    greet(name) {
        console.log(this.name, this.age, name);
    },
    desc: 0
};
user.greet('tutu');
console.log((_a = user.desc) !== null && _a !== void 0 ? _a : 'not available');
