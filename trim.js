function trimFirstLast (str) {
    if (typeof str !== "string") {
        return "not a string, can't trim";
    }
    return str.slice(1, -1);
}

console.log(trimFirstLast("this is a string"));