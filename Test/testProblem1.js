const inventory = require('../database');
const getCarById = require('../problem1');

// Problem 1
let result = getCarById(inventory, 33);

if(result) {
    console.log("Car "+result.id+" is a "+ result.car_year + " "+result.car_make+" "+result.car_model+".");
} else {
    console.log("No Car found.");
}