const fs = require('fs')
const animalList = require('./animalList.json')
const adjectiveList = require('./adjectiveList.json')
const verbList = require('./verbList.json')


let pangramGenerator = {
    animals: animalList,
    verbs: verbList,
    adjectives: adjectiveList,
    generate: function(){
        let  randomNumber = function(max){return Math.floor(Math.random()*(max))};
        let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x','y', 'z']
        let pangram = `The ${this.adjectives[randomNumber(this.adjectives.length)]} ${this.adjectives[randomNumber(this.adjectives.length)]} ${this.animals[randomNumber(this.animals.length)]} ${this.verbs[randomNumber(this.verbs.length)]} the ${this.adjectives[randomNumber(this.adjectives.length)]} ${this.animals[randomNumber(this.animals.length)]}.`;

        return pangram

    }

    
};

console.log(pangramGenerator.generate())