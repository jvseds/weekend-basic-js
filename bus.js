function countRemainingRiders (ride) {
    let remaining = 0;
    for (let riders of ride) {
        remaining += (riders[0] - riders[1]);
    }
    return remaining;
}

const busRide = [
    [2, 1],
    [3, 1],
    [5, 3],
    [1, 1]
];

console.log(`remaining passengers: ${countRemainingRiders(busRide)}`);