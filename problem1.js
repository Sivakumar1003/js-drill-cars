/* ==== Problem #1 ====
    The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out 
    which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, 
    make, and model in the console log in the format of:

    "Car 33 is a *car year goes here* *car make goes here* *car model goes here*"
*/


// This funcytion is get the car details by car id.
function getCarById(inventory, id) {

    //this loop is to travel throw the array.
    for(let i=0; i<inventory.length; i++) {
        
        //check the condition to get the details by id. 
        if(inventory[i].id === id) {
            return inventory[i];
        }
    }

    return null; //If any does't match with id.
}

module.exports = getCarById; 