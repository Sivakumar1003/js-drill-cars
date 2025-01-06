//to get all car model.
function getCarModel(inventory) {
    let allCarModel = [];

    inventory.forEach(detail => {
        if(!allCarModel.includes(detail["car_model"])) {
            allCarModel.push(detail["car_model"]);
        }
    });
    
    return allCarModel.sort();//return all car model.
}

module.exports = getCarModel;