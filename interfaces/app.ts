console.log('Interfaces')

interface user {
    readonly name: string;
    age: number;
    greet: (name: string) => void;
}

let user: user = {
    name: 'max',
    age: 22,
    greet(name) {
        console.log('heyyyyyyu i am under interface : ', name)
    }
}

user.greet('Hey max')

console.log(user)