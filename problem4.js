/* ==== Problem #4 ====
The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the 
dealer data containing only the car years and log the result in the console as it was returned.
 */

//to get all car year.
function getAllCarYear(inventory) {
    let  allCarYear =[];
   
    // iterate the inventory to get car year.
    for(carDetails of inventory) {
        allCarYear.push(carDetails.car_year);
    }
    
    return allCarYear; // return all car year.
}

module.exports = getAllCarYear;