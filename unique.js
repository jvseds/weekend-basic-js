function findUnique (nums) {
    const numsSet = new Set(nums);
    if (numsSet.size > 2) {
        return "Error - There's more than one unique number.";
    }
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] !== nums[i+1] && nums[i] !== nums[i+2]) {
            return nums[i];
        }
    }
}

const numArrs = [
    [1, 1, 1, 2, 1, 1],
    [0, 0, 0.55, 0, 0],
    [8, 3, 3, 3],
    [5, 5, 4, 4, 4, 1],
    [5, 5, 4, 4, 4] // gives wrong answer
];

for (let arr of numArrs) {
    console.log(`Unique number in ${arr} is ${findUnique(arr)}`);
}