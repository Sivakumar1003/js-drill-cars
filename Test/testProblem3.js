const inventory = require('../database');
const getCarModel = require('../problem3');

//problem 3
let result = getCarModel(inventory);

if(result.length != 0) {
        console.log(result);
} else {
    console.log("No Car found.");
}