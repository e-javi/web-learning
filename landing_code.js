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

//Init
const myForm = document.getElementById("submit_csv");
const cur_csv = document.getElementById("csvfile");

function csvToArray(str, delimiter = ",") {

    const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    // Map the rows  
    const arr = rows.map(function (row) {
      const values = row.split(delimiter);
      const el = headers.reduce(function (object, header, index) {
        object[header] = values[index];
        return object;
      }, {});
      return el;
    });

    return arr;
  }
/*
  myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const input = cur_csv.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const text = e.target.result;
      const data = csvToArray(text);
      console.log(data);
      //document.write(JSON.stringify(data));
    };
    
    reader.readAsText(input);
  });
*/

const fileInput = document.getElementById('csvfile');
fileInput.onchange = () => {
  const selectedFile = fileInput.files[0];
  console.log(selectedFile);
  console.log("COMPLETE-----yay");
}
/*
function upload_csv(){




  
    const input = cur_csv.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const text = e.target.result;
      const data = csvToArray(text);
      console.log(data);
      //document.write(JSON.stringify(data));
    };   
    
    reader.readAsText(input);
    
}
*/
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