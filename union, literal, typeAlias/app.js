// // !union
function combineType(val1, val2, conversionTypes) {
    if (typeof val1 === "number" && typeof val1 === "number" || conversionTypes === "as-number") {
        console.log(+val1 + +val2);
    }
    else {
        console.log(val1.toString() + val2.toString());
    }
}
combineType(14, 52, "as-number");
combineType("Manish ", "Jha", "as-string");
var user = {
    name: 'Max',
    age: 22,
    skills: ['react', 'ts']
};
