// !union

// function combine(val1: number | string, val2: number | string) {
//     if (typeof val1 === "number" && typeof val1 === "number") {
//         console.log(+val1 + +val2)
//     } else {
//         console.log(val1.toString() + val2.toString())
//     }
// }

// combine(11, 12)
// combine('Manish', 'Jha')

// *Literal Types

// function combine(val1: number | string, val2: number | string, conversionTypes: "as-number" | "as-string") {
//     if (typeof val1 === "number" && typeof val1 === "number" || conversionTypes === "as-number") {
//         console.log(+val1 + +val2)
//     } else {
//         console.log(val1.toString() + val2.toString())
//     }
// }

// combine(11, 12, "as-number")
// combine('Manish', 'Jha', "as-string")

// ?Type-Alias

type Combinable = number | string


function combine(val1: Combinable, val2: Combinable, conversionTypes: "as-number" | "as-string") {
    if (typeof val1 === "number" && typeof val1 === "number" || conversionTypes === "as-number") {
        console.log(+val1 + +val2)
    } else {
        console.log(val1.toString() + val2.toString())
    }
}

combine(11, 12, "as-number")
combine('Manish', 'Jha', "as-string")

