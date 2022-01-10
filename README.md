# **Pangram Generator**
## **Description**
__________________
A pangram is a sentence that includes at least one of every letter in the alphabet. Among the typewriter community they are often used to test or demonstrate the quality of a machine. "The quick brown fox jumped over the lazy dog." is a timeless classic, but at times it is fun to mix things up a bit (literally). The purpose of this project is to generate new and often quirky pangrams to share amongst my fellow typewriter enthusiasts and anyone else who may have their own interest in pangrams.
## **Usage**
_________
### Generator
* To generate a pangram open the html file in your browser and click "generate".
* Alternatively open pangramGenerator.js in Node and log pangramGenerator.generate() to the console to generate a pangram.
### List Parser
* To add your own words to the database, open listParser.js, add your words to the "raw" variable as a multi line string (each word should be on its own line, other spacing and formatting will be done automatically). Set "pos" equal to the part of speech that your word list is in string format (current options are "adjectives", "verbs", and "animals"). Run the script in Node and dictionary.json will be automatically updated.
### Other Useful Code
* The code in this file may be useful if creating new lists or dictionaries with your own content. The two scripts can be used to format and combine lists.
## **Credits**
______

Thank you to @thusmiley https://github.com/thusmiley for the front end work!

## **License**
____________

GNU General Public License v3.0, see COPYING.txt for complete document.