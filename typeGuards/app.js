// ! typeOf
function combine(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id.toFixed(3));
    }
}
combine("max");
combine(10.25855);
function show(obj) {
    if ('skills' in obj) {
        console.log("Admin: ", obj);
    }
    else {
        console.log("User: ", obj);
    }
}
show({ name: 'Manish', age: 22 });
show({ name: "Mnish is his Boss", skills: ["MERN stack", "TypeScript"] });
