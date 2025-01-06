//to get all car year.
function getAllCarYear(inventory) {
    return inventory.map( detail => {
        return detail["car_year"]
    }); 
}

module.exports = getAllCarYear;