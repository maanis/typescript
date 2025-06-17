// console.log('Lets learn generics');
// interface dummy {
//     name: string
//     age: number
// }
// const data: Array<dummy> = []
// // data.push('apple')
// data.push({ name: 'hehe', age: 45 })
// data.push({ name: 'hehe', age: 58 })
// data.push({ name: 'hehe', age: 45 })
// console.log(data)
// function merge<T>(obj1: T, obj2: T): T {
//     return { ...obj1, ...obj2 }
// }
// const res = merge({ name: 'max' }, { name: 'manish', designation: "Software Developer" })
// console.log(res)
// const createObj = <T extends string, U extends number, V extends boolean>(key: T, value: U, isActive: V): object => {
//     return { key, value, isActive }
// }
// const res: object = createObj('Manish', 500000, true)
// console.log(res)
// !Generic Interface
// interface value<T> {
//     val: T
// }
// const num: value<number> = {
//     val: 45
// }
// const str: value<string> = {
//     val: 'Max'
// }
// const obj: value<object> = { val: { name: 'max' } }
//! Generic with Array
var getFirst = function (arr) {
    return arr[0];
};
var res = getFirst([1, 2, 5, 8, 5, 8]);
var res2 = getFirst(['a', 'b', 'c', 'd']);
console.log(res, res2);
