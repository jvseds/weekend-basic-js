// 2.2 binary to decimal
function convertBinaryToDecimal (binaryArr) {
    if (binaryArr.length < 4) {
        return "The array is too short, can't convert number";
    }
    // convert the array to string
    let binaryNum = binaryArr.toString();
    // get rid of commas
    binaryNum = binaryNum.replaceAll(",", "");
    const decimalNum = parseInt(Number(binaryNum), 2);
    return decimalNum;
}

const binary = [1, 0, 0, 1];
console.log(convertBinaryToDecimal(binary));