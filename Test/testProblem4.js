const inventory = require('../database');
const getAllCarYear = require('../problem4');

//Problem 4
let result = getAllCarYear(inventory);

if(result.length != 0) {
        console.log(result);
} else {
    console.log("No Car found.");
}