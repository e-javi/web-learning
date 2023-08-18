function Card(chinese, pinyin, def) {

    this.chinese = chinese;
    this.pinyin = pinyin;
    this.def = def;

    }

//global deck var
var library = [];
var temp_deck = [];
var card_no = 0;
var front = true;
var shuffle_enabled = false;

//Init
const myForm = document.getElementById("submit_csv");
const cur_csv = document.getElementById("csvfile");

function csv_submit() {
    const input = cur_csv.files[0];
    const reader = new FileReader();
    reader.readAsText(input);
    reader.onload = function(event){
        var data = event.target.result;
        var rows = data.split("\n");
        this.deck = rows;
        load_deck(rows);
    }
}

function display_front(array) {
  document.getElementById("chars").innerHTML = array[card_no].chinese;
  document.getElementById("pinyin").innerHTML = "&nbsp";
  document.getElementById("def").innerHTML = "&nbsp";
}

function display_back(array) {
  document.getElementById("chars").innerHTML = "&nbsp";
  document.getElementById("pinyin").innerHTML = array[card_no].pinyin;
  document.getElementById("def").innerHTML = array[card_no].def;
}

function load_deck(cur_deck) {
    card_no = 0;
    var loaded_deck = cur_deck;
    loaded_deck.shift(); //remove first line of headers
    //remove return escape chars
    for(i in loaded_deck) {
      let text = loaded_deck[i].substr(0, loaded_deck[i].length - 1);
      loaded_deck[i] = text;
    }

    for(i in loaded_deck) {
      let arr = loaded_deck[i].split(",");
      library.push(new Card(arr[0], arr[1], arr[2]));
      temp_deck.push(new Card(arr[0], arr[1], arr[2]));
    }

    display_front(library);
}

function next_card(){
  if(card_no < library.length) {
    card_no++;
  }
  else {
    card_no = 0;
  }
  front = true;
  if(shuffle_enabled){
    display_front(temp_deck);
  }
  else {
    display_front(library);
  }
}

function prev_card() {
  if(card_no > 0) {
    card_no--;
  }
  front = true;
  if(shuffle_enabled){
    display_front(temp_deck);
  }
  else {
    display_front(library);
  }
}

function flip_card() {
  var parent = document.getElementById("flashcard_id");
  var element = document.getElementById("chars");
  if(front) {
    front = false;
    if(shuffle_enabled) {
      display_back(temp_deck);
    }
    else {
      display_back(library);
    }
    
  }
  else {
    front = true;
    if(shuffle_enabled){
      display_front(temp_deck);
    }
    else {
      display_front(library);
    }
  }
}

function reset_deck() {
  card_no = 0;
  front = true;
  shuffle_enabled = false;
  display_front(library);
}

function shuffle() {
  front = true;
  shuffle_enabled = true;
  card_no = 0;
  for (var i = temp_deck.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = temp_deck[i];
    temp_deck[i] = temp_deck[j];
    temp_deck[j] = temp;
  }
  display_front(temp_deck);
}