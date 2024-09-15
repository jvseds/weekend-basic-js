function toCamelCase (str) {
    if (typeof str !== "string") {
        return `can't convert ${typeof str} to camel case!`;
    }
    if (str.length <= 1) {
        return str.toUpperCase;
    }
    let strArray = str.split("_");
    for (let word of strArray) {
        word = word.replace(word[0], word[0].toUpperCase());
        console.log(word);
    }
    const camelStr = strArray.join("");
    return camelStr;
}

const convertMe = "star_wars_jedi";
console.log(toCamelCase(convertMe));