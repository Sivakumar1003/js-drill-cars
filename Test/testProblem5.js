/* ==== Problem #5 ====
The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the 
previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.
*/

const inventory = require('../database');
const getOlderCar = require('../problem5');

//testProblem 2
let result = getOlderCar(inventory);

if(result.length != 0) {
    console.log(result.length + " cars were made before the year 2000.");
} else {
    console.log("No Car found were made before the year 2000.");
}