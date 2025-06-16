// // ! typeOf
function isValid(obj) {
    return (typeof obj === "object" && obj !== null && typeof obj.name === "string" && typeof obj.age === "number");
}
function handleApiRes(data) {
    if (isValid(data)) {
        console.log(data);
    }
    else {
        console.log('invalid api data');
    }
}
handleApiRes({ name: "Manish", age: 22 });
handleApiRes({ age: 25, skills: [25, 23, 45] });
