function combine(a: number, b: number): number {
    return a + b
}

function greet(name: string): void {
    console.log(`Hello ${name}`)
}

let fn: (num1: number, num2: number) => number

fn = combine

let add = (a: number, b: number): number => {
    return a + b
}