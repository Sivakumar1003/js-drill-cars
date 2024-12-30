const inventory = require('../database');
const getOlderCar = require('../problem5');

//testProblem 2
let result = getOlderCar(inventory);

if(result.length != 0) {
    console.log(result.length + " cars were made before the year 2000.");
} else {
    console.log("No Car found were made before the year 2000.");
}