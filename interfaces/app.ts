console.log('Interfaces')

interface user {
    readonly name: string;
    age: number;
    greet: (name: string) => undefined;
    desc?: number
}

let user: user = {
    name: 'trtr',
    age: 22,
    greet(name) {
        console.log(this.name, this.age, name)
    },
    desc: 0
}

user.greet('tutu')

console.log(user.desc ?? 'not available')