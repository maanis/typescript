// // ! typeOf

// type Combinable = string | number
// function combine(id: Combinable) {
//     if (typeof id === "string") {
//         console.log(id.toUpperCase())
//     } else {
//         console.log(id.toFixed(3))
//     }
// }

// combine("max")
// combine(10.25855)


// // ! in

// interface User {
//     name: string
//     age: number
// }

// interface Admin {
//     name: string
//     skills: string[]
// }

// type ObjType = User | Admin

// function show(obj: ObjType) {
//     if ('skills' in obj) {
//         console.log("Admin: ", obj)
//     } else {
//         console.log("User: ", obj)
//     }
// }

// show({ name: 'Manish', age: 22 })
// show({ name: "Mnish is his Boss", skills: ["MERN stack", "TypeScript"] })


//! Custom Api Response Handle

interface User {
    name: string
    age: number
}

function isValid(obj: any): obj is User {
    return (typeof obj === "object" && obj !== null && typeof obj.name === "string" && typeof obj.age === "number")
}

function handleApiRes(data: any) {
    if (isValid(data)) {
        console.log(data)
    } else {
        console.log('invalid api data')
    }
}

handleApiRes({ name: "Manish", age: 22 })
handleApiRes({ age: 25, skills: [25, 23, 45] })