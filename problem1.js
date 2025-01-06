// This funcytion is get the car details by car id.
function getCarById(inventory, id) {
    return inventory.find(detail => {
        return detail.id == id;
    });
}

module.exports = getCarById; 