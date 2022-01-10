// The below code can be uncommented and used to create a JSON file with an array for a single part of speach.
// //This code organizes and formats lists of words for the database. Enter the list in a multi line string. The only requirement is that each entry be on its own line.
// let raw = ``;

// //Input the file you wish to write to as a string after "./".
// let fileName = './filename.json';

// //Opens and parses JSON.
// let listOld = require(fileName);

// //Parses and organizes string (changes to lower case, splits, trim spaces, removes empty elements, combines new and old lists, alphabetizes, removes duplicates, converts to JSON, writes to file).
// let listNew = raw.toLowerCase().split("\n").map(index => index.trim()).filter((a) => a);
// let listFull = listOld.concat(listNew).sort();
// let finalList = [...new Set(listFull)];
// let jsonString = JSON.stringify(finalList);

// //Writes JSON to file.
// var fs = require('fs');
// fs.writeFile(fileName, jsonString, function(err) {
//     if (err) {
//         console.log(err);
//     }
// });


// The below code can be uncommented and used to combine seperate word lists if necessary. If you are using different parts of speech, make sure to change the variables as well as the dictionary object.
// //To use, add your individual JSON objects to the below variables.
// let adjectivesSeperate = require("./adjectiveList.json");
// let verbsSeperate = require("./verbList.json");
// let animalsSeperate = require("./animalList.json");


// let dictionary = {
//     "adjectives": adjectivesSeperate,
//     "verbs" : verbsSeperate,
//     "animals" : animalsSeperate
// };

// dictionary = JSON.stringify(dictionary);

// var fs = require('fs');
// fs.writeFile("./dictionary.json", dictionary, function(err) {
//     if (err) {
//         console.log(err);
//     }
// });