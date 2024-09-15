// 5.5 abbreviate 2 words
function toInitials (str) {
    let initials = str.split(" ");
    for (let i = 0; i < initials.length; i++) {
        initials[i] = initials[i][0].toUpperCase();
    }
    const initialsStr = initials.join(".");
    return initialsStr;
}

const name1 = "Darth Vader";
console.log(toInitials(name1));
const name2 = "Jericho Jones";
console.log(toInitials(name2));