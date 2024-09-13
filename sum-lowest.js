// 2.1
function sumLowestNums (numArray) {
    if (numArray.length < 4) {
        return "The array is too short! should contain at least 4 positive integers"
    }
    const sortedArray = numArray.toSorted((a, b) => a - b);
    const sum = sortedArray[0] + sortedArray[1];
    return sum;
}

const nums = [19, 5, 42, 2, 77];
console.log(sumLowestNums(nums));