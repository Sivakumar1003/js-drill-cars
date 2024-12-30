/* ==== Problem #3 ====
The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all 
the car model names into alphabetical order and log the results in the console as it was returned.
*/ 

//to get all car model.
function getCarModel(inventory) {
    let allCarModel = [];
    
    // iterate the inventory to get car model.
    for(let i=0; i<inventory.length; i++) {
        if(alreadyexits(inventory[i].car_model, allCarModel)) {
            allCarModel.push(inventory[i].car_model);
        }

       
    }
    
    //sorting the car model name.
    for(let index1=0; index1<allCarModel.length-1; index1++) {
        for(let index2=index1+1; index2<allCarModel.length; index2++) {

            //swaap car model name.
            if(allCarModel[index1] > allCarModel[index2]) {
                let temp = allCarModel[index1];
                allCarModel[index1] = allCarModel[index2];
                allCarModel[index2] = temp;
            }
        }
    }
    
    return allCarModel;//return all car model.
}

function alreadyexits(car, allCarModel) {
    for(carModel of allCarModel) {
        if(carModel === car) {
            return false;
        }
    }
    return true;
}

module.exports = getCarModel;