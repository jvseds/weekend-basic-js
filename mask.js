// 5.6 mask details
function maskify (str) {
    if (str.length <= 4) {
        return str;
    }
    let maskedArr = str.split("");
    for (let i = 0; i < maskedArr.length - 4; i++) {
        maskedArr[i] = "#";
    }
    const maskedStr = maskedArr.join("");
    return maskedStr;
}

const details = {
    "creditCard": "1234567812345678",
    "phoneNum": "0664172345",
    "houseNum": "1",
    "middleName": ""
}

for (let key in details) {
    console.log(maskify(details[key]));
}
 