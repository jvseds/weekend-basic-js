function popInNYears (p0, percent, migrants, popToSurpass) {
    if (p0 <= 0 || percent <= 0 || popToSurpass <= p0) {
        return "Error, p0 or change in population can't be 0 or negative";
    }
    let newPopulation = p0 + (p0 * (percent / 100)) + migrants;
    let countYears = 0;
    while (newPopulation < popToSurpass) {
        newPopulation += (newPopulation * (percent / 100)) + migrants;
        countYears += 1;
    }
    return countYears;
}

const initialPopulation = 1500;
const growthRate = 5;
const incomingMigrants = 100;
const finalPopulation = 5000;
let msg = `for initial pop = ${initialPopulation}, growth rate = ${growthRate}, migration = ${incomingMigrants}, it will take ${popInNYears(initialPopulation, growthRate, incomingMigrants, finalPopulation)} years to surpass population of ${finalPopulation}`;

console.log(msg);