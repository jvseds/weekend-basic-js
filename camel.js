function toCamelCase (str) {
    if (typeof str !== "string") {
        return `can't convert ${typeof str} to camel case!`;
    }
    if (str.length <= 1) {
        return str.toUpperCase();
    }
    let strArray = str.split("_");
    for (let i = 1; i < strArray.length; i++) {
        strArray[i] = strArray[i].replace(strArray[i][0], strArray[i][0].toUpperCase());
        console.log(strArray[i]);
    }
    console.log(strArray);
    const camelStr = strArray.join("");
    return camelStr;
}

const convertMe = "star_wars_jedi";
console.log(toCamelCase(convertMe));