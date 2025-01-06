/* ==== Problem #1 ====
    The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out 
    which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, 
    make, and model in the console log in the format of:

    "Car 33 is a *car year goes here* *car make goes here* *car model goes here*"
*/

const inventory = require('../database');
const getCarById = require('../problem1');

let result = getCarById(inventory, 33);

if(result) {
    console.log("Car "+result.id+" is a "+ result.car_year + " "+result.car_make+" "+result.car_model+".");
} else {
    console.log("No Car found.");
}