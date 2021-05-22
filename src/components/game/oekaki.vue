<template>
<div align="center">
  <h2 class="heading02">{{ puzzle_name }}</h2>

    <canvas id="myCanvas" width="500px" height="500px" @mousedown="dragStart" @mouseup="dragEnd" @mouseout="dragEnd" @mousemove="draw"  ></canvas>

          <div id="tool-area">
            <button id="pen-black-button" @click="board">解答</button>
            <button id="pen-red-button" @click="board">解答</button>
            <button id="pen-blue-button" @click="board">解答</button>
            <button id="eraser-button" @click="board" >解答</button>
            <button id="clear-button" @click="clear">クリア</button>
            <button id="download-button" @click="board">解答</button>
          </div>

    <b-row align-h="center">
      <b-col sm="12">
        <div align-h="center">
          <b-card no-body>
            <b-tabs pills card vertical>
              <b-tab title="2" active><b-card-text>{{ word_list }}</b-card-text></b-tab>
              <b-tab title="3"><b-card-text>Tab contents 3</b-card-text></b-tab>
              <b-tab title="4"><b-card-text>Tab contents 4</b-card-text></b-tab>
            </b-tabs>
          </b-card>
        </div>
      </b-col>
    </b-row>
</div>

</template>

<script>

export default {
    data() {
      return {
        canvas: null,
        context: null,
        isDrag: false,
        puzzle_name: null,
        word_list: [""],
        //canvasMode: 'penBlack',
        //canvasMode: 'penRed',
        canvasMode: 'penBlue',
          newdraw: {
            user_id: "",
            input_canvas: "",
            comment: "",
          },
       };
    },
    mounted(){
      this.canvas = document.querySelector('#myCanvas')
      this.context = this.canvas.getContext('2d')
      this.context.lineCap = 'round';
      this.context.lineJoin = 'round';
      this.context.lineWidth = 1;
      this.context.strokeStyle = '#000000';
      var ctx = document.getElementById("myCanvas").getContext("2d");
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, document.getElementById("myCanvas").width, document.getElementById("myCanvas").height);
    },
    methods: {
    board :function(){
      const puzzle_data = '{"prime_minister_of_japan_w15_h15_s808242020_e1247": {"bug": false, "epoch": 1247, "evaluation": {"0": 0, "1": 0, "10": 0, "2": 0, "3": 1, "4": 2, "5": 1, "6": 0, "7": 0, "8": 0, "9": 0}, "height": 15, "is_unique": true, "words": [["", "み", "き", "た", "け", "お", "", "", "", "", "", "よ", "", "", ""], ["", "や", "", "", "", "", "あ", "", "", "あ", "べ", "し", "ん", "ぞ", "う"], ["", "ざ", "", "も", "り", "よ", "し", "ろ", "う", "", "", "だ", "", "", ""], ["", "わ", "", "", "", "", "だ", "", "の", "だ", "よ", "し", "ひ", "こ", ""], ["", "き", "", "", "", "", "ひ", "", "そ", "", "", "げ", "", "", ""], ["", "い", "け", "だ", "は", "や", "と", "", "う", "", "", "る", "", "", ""], ["", "ち", "", "", "ら", "", "し", "", "す", "", "", "", "", "", ""], ["い", "", "", "", "た", "", "", "た", "け", "し", "た", "の", "ぼ", "る", ""], ["ぬ", "", "", "", "か", "", "", "", "", "", "な", "", "", "", "さ"], ["か", "い", "ふ", "と", "し", "き", "", "", "あ", "", "か", "", "た", "", "い"], ["い", "", "く", "", "", "し", "", "", "そ", "", "か", "ん", "な", "お", "と"], ["つ", "", "だ", "", "", "の", "", "", "う", "", "く", "", "か", "", "う"], ["よ", "", "や", "", "", "ぶ", "", "", "た", "", "え", "", "ぎ", "", "ま"], ["し", "", "す", "", "", "す", "", "", "ろ", "", "い", "", "い", "", "こ"], ["", "", "お", "ぶ", "ち", "け", "い", "ぞ", "う", "", "", "", "ち", "", "と"]], "mask": null, "name": "内閣総理大臣", "nwords": 21, "seed": 808242020, "width": 15}}'
      const jsonObject = JSON.parse(puzzle_data)
      const id = Object.keys(jsonObject)[0]
      const height = jsonObject[id]['height']
      const width = jsonObject[id]['width']

      this.puzzle_name = jsonObject[id]['name']
      const words = jsonObject[id]['words']
      //const nwords = jsonObject[id]['nwords']
      
      //Grid size | Unit: pixel
      const GRID_SIZE = 30;

      // 
      var ban_ar = new Array(width)
      for(var x=0; x<ban_ar.length; x++){
          ban_ar[x] = new Array(height)
      }

      // CANVAS
      //var canvas = document.getElementById("canvas");
      this.context.clearRect(0, 0, document.getElementById("myCanvas").width, document.getElementById("myCanvas").height);
      //this.context.fillRect(0, 0, document.getElementById("myCanvas").width, document.getElementById("myCanvas").height);

      var ctx = document.getElementById("myCanvas").getContext("2d");
      //ctx.strokeStyle = 'black';
      //ctx.rect(0, 0, 30, 30);
      ctx.fillStyle = 'black';
      ctx.fill();
      ctx.font = "20px cursive";

      for (var i = 0; i < width; i++) {
        for (var j = 0; j < height; j++) {
          if (words[i][j] == ''){
            ban_ar[i][j] = 0;
          }
          else{
            ban_ar[i][j] = 1;
            ctx.rect(j*GRID_SIZE, i*GRID_SIZE, 30, 30);
            ctx.fillText(words[i][j], GRID_SIZE*j+GRID_SIZE/6, i*GRID_SIZE+GRID_SIZE/1.3);
            ctx.stroke();
          }
        }
      }

      // create word list from json data
      var word_list_row = new Array();
      var word_list_col = new Array();
      // For Array trans
            
      for(var k=0; k<height; k++){
        let tmp = '';
        let ary_row = words[k];
        for(var l=0; l<width; l++){
          if ( ary_row[l] == '' && tmp.length > 1 ){
            word_list_row.push(tmp);
            tmp = ''
          }
          else if ( ary_row[l] == '' && tmp.length == 1 ){
            tmp = '';
          }
          else{
            tmp = tmp + ary_row[l];
          }
        }
        if (tmp.length > 1 ){
          word_list_row.push(tmp);
        }
      }

      for(var m=0; m<width; m++){
        let tmp = '';
        for(var n=0; n<height; n++){
          if ( words[n][m] == '' && tmp.length > 1 ){
            word_list_col.push(tmp);
            tmp = ''
          }
          else if ( words[n][m] == '' && tmp.length == 1 ){
            tmp = '';
          }
          else{
            tmp = tmp + words[n][m];
          }
        }
        if (tmp.length > 1 ){
          word_list_col.push(tmp);
        }
      }

      this.word_list = word_list_row.concat(word_list_col)
      // Sort by number of characters
      this.word_list.sort(function(a, b){
        if(a.length < b.length) return -1;
        else if(a.length > b.length) return 1;
        else return 0;
      });

      console.log(this.word_list)
    },
    // 描画
    draw :function(e) {
      var x = e.layerX
      var y = e.layerY

      if(!this.isDrag) {
        return;
      }

      this.context.lineTo(x, y);
      this.context.stroke();
    },
    // 描画開始（mousedown）
    dragStart:function(e) {
      var x = e.layerX
      var y = e.layerY

      this.context.beginPath();
      this.context.lineTo(x, y);
      this.context.stroke();

      this.isDrag = true;
    },
    // 描画終了（mouseup, mouseout）
    dragEnd: function() {
      this.context.closePath();
      this.isDrag = false;
    },
    clear: function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      var ctx = document.getElementById("myCanvas").getContext("2d");
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, document.getElementById("myCanvas").width, document.getElementById("myCanvas").height);
    },
        // ペンモード
    pen: function(){
      // カーソル変更
      this.canvasMode = 'pen'

      // 描画設定
      this.context.lineCap = 'round';
      this.context.lineJoin = 'round';
      this.context.lineWidth = 5;
      this.context.strokeStyle = '#000000';
    },
    // 消しゴムモード
    eraser: function() {
      // カーソル変更
      this.canvasMode = 'eraser'

      // 描画設定
      this.context.lineCap = 'square';
      this.context.lineJoin = 'square';
      this.context.lineWidth = 30;
      this.context.strokeStyle = '#FFFFFF';
    },
      penBlack: function(){
    // カーソル変更
    this.canvasMode = 'penBlack'

    // 描画設定
    this.context.lineCap = 'round';
    this.context.lineJoin = 'round';
    this.context.lineWidth = 5;
    this.context.strokeStyle = '#000000';
  },
  // ペンモード（赤）
  penRed: function(){
    // カーソル変更
    this.canvasMode = 'penRed'

    // 描画設定
    this.context.lineCap = 'round';
    this.context.lineJoin = 'round';
    this.context.lineWidth = 5;
    this.context.strokeStyle = '#FF0000';
  },
  // ペンモード（青）
  penBlue: function(){
    // カーソル変更
    this.canvasMode = 'penBlue'

    // 描画設定
    this.context.lineCap = 'round';
    this.context.lineJoin = 'round';
    this.context.lineWidth = 5;
    this.context.strokeStyle = '#0000FF';
  },
  download: function() {
    let link = document.createElement("a");
    link.href = this.canvas.toDataURL("image/jpg");
    link.download = 'canvas-' + new Date().getTime() + '.jpg';
    link.click();
  },
},
};
</script>

<style scoped>
#myCanvas {
 border: 1px solid #000000;
}
.eraser {
    cursor: url(/public/img/eraser.png) 15 15,auto;
}
.heading02 {
    padding-top: 50px;
}
</style>