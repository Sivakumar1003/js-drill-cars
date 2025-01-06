/* ==== Problem #4 ====
The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the 
dealer data containing only the car years and log the result in the console as it was returned.
 */

const inventory = require('../database');
const getAllCarYear = require('../problem4');

let result = getAllCarYear(inventory);

if(result.length != 0) {
        console.log(result);
} else {
    console.log("No Car found.");
}