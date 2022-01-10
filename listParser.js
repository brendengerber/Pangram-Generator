//This code organizes and formats lists of words for the database. Enter the list in a multi line string. The only requirement is that each entry be on its own line.
let raw = ``;

//Input the part of speech you wish to add as it is in dictionary.json ("adjectives", "verbs", or "animals".)
let pos = '';

//Opens and parses JSON.
let dictionary = require("./dictionary.json");

//Parses and organizes string (changes to lower case, splits, trim spaces, removes empty elements, combines new and old lists, alphabetizes, removes duplicates, converts to JSON, writes to file).
let listNew = raw.toLowerCase().split("\n").map(index => index.trim()).filter((a) => a);
dictionary[pos] = dictionary[pos].concat(listNew).sort();
dictionary[pos] = [...new Set(dictionary[pos])];
let jsonString = JSON.stringify(dictionary);

//Writes JSON to file.
var fs = require('fs');
fs.writeFile("./dictionary.json", jsonString, function(err) {
    if (err) {
        console.log(err);
    }
});
