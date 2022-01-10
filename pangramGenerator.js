const fs = require('fs');
const dictionary = require("./dictionary.json")
let pangramGenerator = {
    animals: dictionary["animals"],
    verbs: dictionary["verbs"],
    adjectives: dictionary["adjectives"],
    generate: function(){
        let pangramLetters = [];
        let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let randomNumber = function(max){return Math.floor(Math.random()*(max))};
        let pangram = '';
        while (pangramLetters.length < 26) {
            pangramLetters = [];
            pangram = `The ${this.adjectives[randomNumber(this.adjectives.length)]} ${this.adjectives[randomNumber(this.adjectives.length)]} ${this.animals[randomNumber(this.animals.length)]} ${this.verbs[randomNumber(this.verbs.length)]} the ${this.adjectives[randomNumber(this.adjectives.length)]} ${this.animals[randomNumber(this.animals.length)]}.`;
            for(letter of pangram){
                letter = letter.toLowerCase();
                if(pangramLetters.includes(letter) !== true && alphabet.includes(letter) === true){
                    pangramLetters.push(letter);
                }
            } 
        }
        return pangram
    }   
}; 

