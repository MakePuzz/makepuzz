<template>
<div align="center">
  <h2 class="heading02">お絵描き新規投稿</h2>

    <canvas id="myCanvas" width="500px" height="300px" @mousedown="dragStart" @mouseup="dragEnd" @mouseout="dragEnd" @mousemove="draw"></canvas>

          <div id="tool-area">
            <button id="pen-black-button" @click="penBlack">ペン（黒）</button>
            <button id="pen-red-button" @click="penRed">ペン（赤）</button>
            <button id="pen-blue-button" @click="penBlue">ペン（青）</button>
            <button id="eraser-button" @click="eraser" >消しゴム</button>
            <button id="clear-button" @click="clear">クリア</button>
            <button id="download-button" @click="download">ダウンロード</button>
          </div>
</div>

</template>

<script>

export default {
    data() {
      return {
        canvas: null,
        context: null,
        isDrag: false,
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
      this.context.lineWidth = 5;
      this.context.strokeStyle = '#000000';
      var ctx = document.getElementById("myCanvas").getContext("2d");
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, document.getElementById("myCanvas").width, document.getElementById("myCanvas").height);
    },
    methods: {
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