/* ==== Problem #6 ====
A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only 
contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.
*/

const inventory = require('../database');
const getBMWAndAudi = require('../problem6');

const result = getBMWAndAudi(inventory);

if(result.length != 0) {
    console.log(JSON.stringify(result));
} else {
    console.log("No cars found.");
}