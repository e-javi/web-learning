function Card(chinese, pinyin, def) {

    this.chinese = chinese;
    this.pinyin = pinyin;
    this.def = def;

    }

//global deck var
var library = [];

//Init
const myForm = document.getElementById("submit_csv");
const cur_csv = document.getElementById("csvfile");

function pressed() {
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
    document.getElementById("pinyin").innerHTML = "";
    document.getElementById("def").innerHTML = "";
}