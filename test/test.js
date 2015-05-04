'use strict';

var lw = require("../index.js")(45, 0, 0);

console.log("Test values at our office :", '-0.570645, 44.840397')



console.log('Testing toLambert...')
var a = lw.toLambert(-0.570645, 44.840397);
console.log("error on X: ", a.X - 1417799.8)
console.log("error on Y: ", a.Y - 4188483.8)


console.log('Testing toLonLat...')
var b = lw.toLonLat(1417799.8, 4188483.8);
console.log("error on lon: ", b.lon - (-0.570645) )
console.log("error on lat: ", b.lat - (44.840397) )