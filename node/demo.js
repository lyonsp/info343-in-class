/**
 * demo.js
 * Demonstration script for introducting Node.js
 */
"use strict";
console.log("Hello Node.js!");

var fs = require("fs");
// require is a global function, similar to input
// imports module into our current module
var names = require("./data/babynames-1996.json");
console.log("there are %d names", names.length);
var popFemNames = names.filter(rec => "F" == rec.sex)
    .sort((rec1, rec2) => rec2.count - rec1.count)
    .slice(0, 10)
    .map(rec => rec.name);

console.log(popFemNames);
fs.writeFileSync("./data/pop-fem-names.json", JSON.stringify(popFemNames));
