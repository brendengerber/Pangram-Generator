//This code organizes and formats lists of words for the database. Enter the list in a multi line string. The only requirement is that each entry be on its own line.

let raw = ``






//Parses and organizes string (changes to lower case, splits, alphabetizes, trim spaces, removes empty elements, removes duplicates, converts to JSON).
let list = raw.toLowerCase().split("\n").sort().map(index => index.trim()).filter((a) => a);
let finalList = [...new Set(list)];
let jsonString = JSON.stringify(finalList)

//Writes JSON to file. Make sure to change file name before running
var fs = require('fs');
fs.writeFile("adjectiveList.json", jsonString, function(err) {
    if (err) {
        console.log(err);
    }
});
