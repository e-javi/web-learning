function Card(chinese, pinyin, def) {

    this.chinese = chinese;
    this.pinyin = pinyin;
    this.def = def;

    }

//global deck var
var library = [];
var card_no = 0;
var front = true;

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

function load_deck(cur_deck) {
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
    }

    document.getElementById("chars").innerHTML = library[0].chinese;
    document.getElementById("pinyin").innerHTML = "&nbsp";
    document.getElementById("def").innerHTML = "&nbsp";
}

function next_card(){
  if(card_no < library.length) {
    card_no++;
  }
  else {
    card_no = 0;
  }
  front = true;
  document.getElementById("chars").innerHTML = library[card_no].chinese;
  document.getElementById("pinyin").innerHTML = "&nbsp";
  document.getElementById("def").innerHTML = "&nbsp";
}

function prev_card() {
  if(card_no > 0) {
    card_no--;
  }
  front = true;
  document.getElementById("chars").innerHTML = library[card_no].chinese;
  document.getElementById("pinyin").innerHTML = "&nbsp";
  document.getElementById("def").innerHTML = "&nbsp";
}

function flip_card() {
  var parent = document.getElementById("flashcard_id");
  var element = document.getElementById("chars");
  if(front) {
    front = false;
    document.getElementById("chars").innerHTML = "&nbsp";
    document.getElementById("pinyin").innerHTML = library[card_no].pinyin;
    document.getElementById("def").innerHTML = library[card_no].def;
  }
  else {
    front = true;
    document.getElementById("chars").innerHTML = library[card_no].chinese;
    document.getElementById("pinyin").innerHTML = "&nbsp";
    document.getElementById("def").innerHTML = "&nbsp";
  }
}