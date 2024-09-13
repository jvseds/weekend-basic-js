function centuryFromYear (year) {
    if (year <= 0) {
        return "BCE, not calculated";
    } else if (year > 10 ** 4) {
        return "too far in the future...";
    }
    const century = Math.ceil(Math.ceil(year / 100));
    return century;
}

const years = [1705, 1900, 1601, 2000];

for (let year of years) {
    console.log(`Year ${year} is in century ${centuryFromYear(year)}`);
}