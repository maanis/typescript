"use strict";
console.log('Interfaces');
let user = {
    name: 'max',
    age: 22,
    greet(name) {
        console.log('heyyyyyyu i am under interface : ', name);
    }
};
user.greet('Hey max');
console.log(user);
