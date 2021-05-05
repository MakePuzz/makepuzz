// Load puzzle JSON data ----------------------------------------------------------------
const puzzle_data = '{"prime_minister_of_japan_w15_h15_s808242020_e1247": {"bug": false, "epoch": 1247, "evaluation": {"0": 0, "1": 0, "10": 0, "2": 0, "3": 1, "4": 2, "5": 1, "6": 0, "7": 0, "8": 0, "9": 0}, "height": 15, "is_unique": true, "words": [["", "み", "き", "た", "け", "お", "", "", "", "", "", "よ", "", "", ""], ["", "や", "", "", "", "", "あ", "", "", "あ", "べ", "し", "ん", "ぞ", "う"], ["", "ざ", "", "も", "り", "よ", "し", "ろ", "う", "", "", "だ", "", "", ""], ["", "わ", "", "", "", "", "だ", "", "の", "だ", "よ", "し", "ひ", "こ", ""], ["", "き", "", "", "", "", "ひ", "", "そ", "", "", "げ", "", "", ""], ["", "い", "け", "だ", "は", "や", "と", "", "う", "", "", "る", "", "", ""], ["", "ち", "", "", "ら", "", "し", "", "す", "", "", "", "", "", ""], ["い", "", "", "", "た", "", "", "た", "け", "し", "た", "の", "ぼ", "る", ""], ["ぬ", "", "", "", "か", "", "", "", "", "", "な", "", "", "", "さ"], ["か", "い", "ふ", "と", "し", "き", "", "", "あ", "", "か", "", "た", "", "い"], ["い", "", "く", "", "", "し", "", "", "そ", "", "か", "ん", "な", "お", "と"], ["つ", "", "だ", "", "", "の", "", "", "う", "", "く", "", "か", "", "う"], ["よ", "", "や", "", "", "ぶ", "", "", "た", "", "え", "", "ぎ", "", "ま"], ["し", "", "す", "", "", "す", "", "", "ろ", "", "い", "", "い", "", "こ"], ["", "", "お", "ぶ", "ち", "け", "い", "ぞ", "う", "", "", "", "ち", "", "と"]], "mask": null, "name": "内閣総理大臣", "nwords": 21, "seed": 808242020, "width": 15}}'
const jsonObject = JSON.parse(puzzle_data);
const id = Object.keys(jsonObject)[0];
const height = jsonObject[id]['height']
const width = jsonObject[id]['width']
const name = jsonObject[id]['name']
const words = jsonObject[id]['words']
const nwords = jsonObject[id]['nwords']

//---------------------------------------------------------------------------------------
//puzzle size
const FIELD_COL = height;
const FIELD_ROW = width;

//Grid size | Unit: pixel
const GRID_SIZE = 30;

//Screen size
const SCREEN_W = GRID_SIZE * FIELD_COL + 300;
const SCREEN_H = GRID_SIZE * FIELD_ROW

// 
var ban_ar = new Array(width)
for(var x=0; x<ban_ar.length; x++){
    ban_ar[x] = new Array(height)
}

// create word list from json data
var word_list_row = new Array();
var word_list_col = new Array();
// For Array trans
const transpose = a => a[0].map((_, c) => a.map(r => r[c]));

function find_word(ary){
  let word = new Array()
  for(var y=0; y<height; y++){
    let tmp = '';
    let ary_row = ary[y];
    for(var x=0; x<width; x++){
      if ( ary_row[x] == '' && tmp.length > 1 ){
        word.push(tmp);
        tmp = ''
      }
      else if ( ary_row[x] == '' && tmp.length == 1 ){
        tmp = '';
      }
      else{
        tmp = tmp + ary_row[x];
      }
    }
    if (tmp.length > 1 ){
      word.push(tmp);
    }
  }
  return word;
}

word_list_row = find_word(words)
word_list_col = find_word(transpose(words))

var word_list = word_list_row.concat(word_list_col)
// Sort by number of characters
word_list.sort(function(a, b){
  if(a.length < b.length) return -1;
  else if(a.length > b.length) return 1;
  else return 0;
});


console.log(id)
console.log(height)
console.log(width)
console.log(name)
console.log(words)
console.log(nwords)
console.log(word_list_row)
console.log(word_list_col)
console.log(word_list)


// CANVAS
var canvas = document.getElementById("canvas");

for (var x = 0; x < width; x++) {
  for (var y = 0; y < height; y++) {
    if (words[x][y] == ''){
      ban_ar[x][y] = 0;
    }
    else{
      ban_ar[x][y] = 1;
      drawRect(x*GRID_SIZE, y*GRID_SIZE, 30, 30)
      write_text(words[x][y], 12, x*GRID_SIZE+GRID_SIZE/4, y*GRID_SIZE+2*GRID_SIZE/3, GRID_SIZE);
    }
  }
}

// Word list
for(var y=0; y<word_list.length; y++){
  write_text('🔲' + word_list[y], 18, width*GRID_SIZE+GRID_SIZE*3, y*GRID_SIZE+2*GRID_SIZE/3, SCREEN_W/3);
}



// define event listner
function onDown(e) {
  console.log("down");
}

function onUp(e) {
  console.log("up");
}

function onClick(e) {
  console.log("click");
}

function onOver(e) {
  console.log("mouseover");
}

function onOut() {
  console.log("mouseout");
}

canvas.addEventListener('mousedown', onDown, false);
canvas.addEventListener('mouseup', onUp, false);
canvas.addEventListener('click', onClick, false);
canvas.addEventListener('mouseover', onOver, false);
canvas.addEventListener('mouseout', onOut, false);

// get canvas coord
function onClick(e) {
  console.log("click");
  var x = e.clientX - canvas.offsetLeft;
  var y = e.clientY - canvas.offsetTop;
  console.log("x:", x, "y:", y);
}

//
var context = canvas.getContext('2d');

function onClick(e) {
  console.log("click");
  var x = e.clientX - canvas.offsetLeft;
  var y = e.clientY - canvas.offsetTop;
  console.log("x:", x, "y:", y);

  drawRect(x, y, 10, 10);
}

function drawRect(x, y, width, height) {
  var context = canvas.getContext('2d');
  context.strokeStyle = "rgba(50,55,55,1)";
  context.strokeRect(x, y, width, height);
}

function write_text(text, size, x, y, max_width) {
  var context = canvas.getContext("2d");
  context.font = size + "px serif";
  //ctx.fillText(text, x, y [, maxWidth]);
  context.fillText(text, x, y, max_width);
}
canvas.addEventListener('click', onClick, false);