//To get all  car year.
const getAllCarYear = require('./problem4');

//function to get all older car.
function getOlderCar(inventory) {
    let allCarYear = getAllCarYear(inventory);
    return allCarYear.filter(year => year < 2000);
}

module.exports = getOlderCar;