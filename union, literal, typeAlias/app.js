// !union
// function combine(val1: number | string, val2: number | string) {
//     if (typeof val1 === "number" && typeof val1 === "number") {
//         console.log(+val1 + +val2)
//     } else {
//         console.log(val1 + val2)
//     }
// }
// combine(11, 12)
// combine('Manish', 'Jha')
// *Literal Types
function combine(val1, val2, conversionTypes) {
    if (typeof val1 === "number" && typeof val1 === "number" || conversionTypes === "as-number") {
        console.log(+val1 + +val2);
    }
    else {
        console.log(val1 + val2);
    }
}
combine(11, "max", "as-number");
combine('Manish', 'Jha', "as-string");
