const inventory = require('../database');
const getLastCar = require('../problem2');

//problem 2
let result = getLastCar(inventory);

if(result) {
    console.log("Last car is a "+result.car_make+" "+result.car_model+".");
} else {
    console.log("No Car found.");
}