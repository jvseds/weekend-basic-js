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

const initialPopulation2 = 1500000;
const growthRate2 = 2.5;
const incomingMigrants2 = 10000;
const finalPopulation2 = 2000000;

msg = `for initial pop = ${initialPopulation2}, growth rate = ${growthRate2}, migration = ${incomingMigrants2}, it will take ${popInNYears(initialPopulation2, growthRate2, incomingMigrants2, finalPopulation2)} years to surpass population of ${finalPopulation2}`;

console.log(msg);