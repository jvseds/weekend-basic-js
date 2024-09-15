function toWeirdCase (str) {
    if (typeof str !== "string") {
        return `can't convers ${typeof str} to weird case!`;
    }
    // ensure all letters have the same case
    const lowerStr = str.toLowerCase();
    let charArray = lowerStr.split("");
    for (let i = 0; i < charArray.length; i += 2) {
        charArray[i] = charArray[i].toUpperCase();
    }
    const weirdStr = charArray.join("");
    return weirdStr;
}

console.log(toWeirdCase("string"));