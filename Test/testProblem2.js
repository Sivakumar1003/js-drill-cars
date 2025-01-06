/* ==== Problem #2 ====
The dealer needs the information on the last car in their inventory. Execute a function to find what the make 
and model of the last car in the inventory is?  Log the make and model into the console in the format of:
    "Last car is a *car make goes here* *car model goes here*"
*/

const inventory = require('../database');
const getLastCar = require('../problem2');

let result = getLastCar(inventory);

if(result) {
    console.log("Last car is a "+result.car_make+" "+result.car_model+".");
} else {
    console.log("No Car found.");
}