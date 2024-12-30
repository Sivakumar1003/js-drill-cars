const inventory = require('../database');
const getBMWAndAudi = require('../problem6');

const result = getBMWAndAudi(inventory);

if(result.length != 0) {
    console.log(JSON.stringify(result,null,1));
} else {
    console.log("No cars found.");
}