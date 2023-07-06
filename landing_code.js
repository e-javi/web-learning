function Card(chinese, def, pinyin) {

    this.chinese = chinese;
    this.def = def;
    this.pinyin = pinyin;

}

var card1 = new Card("中文", "Chinese language", "zhōng wén");
var card2 = new Card("你好", "Hello", "nǐ hǎo")
var card3 = new Card("再见", "Goodbye", "zái jián")

//Decks
var deck_1 = [card1, card2, card3];

//Library of decks
var library = [deck_1];

//Tracking
var current_card = 0;
var current_deck = 0;
var deck_length = deck_1.length;

//Init?



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