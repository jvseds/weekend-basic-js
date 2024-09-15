// 5.2 string repeat
function repeatStr (times, str) {
    if (typeof str !== "string") {
        return "Error - not a string";
    }
    let multString = "";
    for (let i = 0; i < times; i++) {
        multString += str;
    }
    return multString;
}

console.log(repeatStr(3, "hello"));