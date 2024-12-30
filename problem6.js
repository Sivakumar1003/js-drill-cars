/* ==== Problem #6 ====
A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only 
contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.
*/

function getBMWAndAudi(inventory) {
    let BMWAndAudiCars = [];

    //iterate inventory to get all car details
    for (let i = 0; i < inventory.length; i++) {

        //check only for BMW and Audi car.
        if (inventory[i].car_make === 'BMW' || inventory[i].car_make === 'Audi') {
            BMWAndAudiCars.push(inventory[i]);
        }
    }

    return BMWAndAudiCars; // return all Audi and BMW cars.
}

module.exports = getBMWAndAudi;