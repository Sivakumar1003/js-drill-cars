const inventory = require('../database');
const getBMWAndAudi = require('../problem6');

const result = getBMWAndAudi(inventory);

if(result.length != 0) {
    console.log(JSON.stringify(result));
} else {
    console.log("No cars found.");
}