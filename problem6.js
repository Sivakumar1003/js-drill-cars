function getBMWAndAudi(inventory) {
    return inventory.filter(detail => {
        return detail["car_make"] === "Audi" || detail["car_make"] === "BMW";
    })
}

module.exports = getBMWAndAudi;