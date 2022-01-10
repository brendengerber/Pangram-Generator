//This code organizes and formats lists of words for the database. Enter the list in a multi line string. The only requirement is that each entry be on its own line.
let raw = ``

//Input the file you wish to write to as a string after "./".
let fileName = './filename.json'

//Opens and parses JSON.
let listOld = require(fileName)

//Parses and organizes string (changes to lower case, splits, trim spaces, removes empty elements, combines new and old lists, alphabetizes, removes duplicates, converts to JSON, writes to file).
let listNew = raw.toLowerCase().split("\n").map(index => index.trim()).filter((a) => a);
let listFull = listOld.concat(listNew).sort()
let finalList = [...new Set(listFull)];
let jsonString = JSON.stringify(finalList)

// //Writes JSON to file.
var fs = require('fs');
fs.writeFile(fileName, jsonString, function(err) {
    if (err) {
        console.log(err);
    }
});
