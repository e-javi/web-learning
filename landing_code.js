function Card(chinese, pinyin, def) {

    this.chinese = chinese;
    this.pinyin = pinyin;
    this.def = def;

    }

var card1 = new Card("中文", "Chinese language", "zhōng wén");
var card2 = new Card("你好", "Hello", "nǐ hǎo")
var card3 = new Card("再见", "Goodbye", "zái jián")

//Decks
var deck_1 = [card1, card2, card3];

//Library of decks
var library = [];

//Tracking
var current_card = 0;
var current_deck = 0;
var deck_length = deck_1.length;

//Init?
//  C:\Users\elimj\Desktop\web-learning\vocab

//set up required modules to read through directory
var fs = require('fs');
var path = require('path');
var location = 'C:\\Users\\elimj\\Desktop\\web-learning\\vocab';

// Loop through all the files in the temp directory
fs.readdir(location, function (err, files) {
    if (err) {
      console.error("Could not list the directory.", err);
      process.exit(1);
    }
  
    files.forEach(function (file, index) {
        var reader = new FileReader();
        reader.onload = function (e) {
            const text = e.target.result;
            const array = csvToArray(text);
            document.write(JSON.stringify(array));
        };
        reader.readAsText(file)
        
    });
  });

function nextCard(){
    current_card = (current_card === deck_length - 1) ? 0 : current_card ++;
    
    curr_chinese = library[current_deck][current_card].chinese;
    curr_def = library[current_deck][current_card].def;
    curr_pinyin = library[current_deck][current_card].pinyin;

    console.log(curr_chinese);
    console.log(curr_def);
    console.log(curr_pinyin);
    //use inner HTML here

}