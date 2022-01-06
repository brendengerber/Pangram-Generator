const fs = require('fs')
const animalList = require('./animalList.json')
const adjectiveList = require('./adjectiveList.json')
const verbList = require('./verbList.json')


let dictionary = {
    animals: animalList,
    verbs: verbList,
    adjectives: adjectiveList,
};

console.log(dictionary.verbs)

let pangramGenerator = {
    
};