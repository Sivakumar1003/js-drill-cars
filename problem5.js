/* ==== Problem #5 ====
The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the 
previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.
*/

//To get all  car year.
const getAllCarYear = require('./problem4');

//function to get all older car.
function getOlderCar(inventory) {
    let allCarYear = getAllCarYear(inventory);
    let olderCarYear = [];
    
    //iterate the getOlderCar to get older car year.
    for(let i=0; i<allCarYear.length; i++) {
        if(allCarYear[i] < 2000) {
            olderCarYear.push(allCarYear[i]);
        }
    }
    return olderCarYear;//return older ca.
}

module.exports = getOlderCar;