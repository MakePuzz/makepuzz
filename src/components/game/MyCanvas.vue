<template>
    <canvas class="canvas" width=300 height="300"></canvas>
</template>

<script>
import Board from '@/mixins/board';

export default {
  mixins: [Board],
  props: {
    radius: {
      type: Number,
      default: 50
    },
  },
  watch: {
    radius() {
      this.draw(this.radius)
    },
  },
  methods: {
    draw(radius) {
      this.ctx.beginPath()
      this.ctx.clearRect(0, 0, 300, 300)
      this.ctx.arc(150, 150, radius, 0, Math.PI * 2)
      this.ctx.fill()
    },
    display(width, height, words) {
      //puzzle size
      //const FIELD_COL = height;
      //const FIELD_ROW = width;

      //Screen size
      //const SCREEN_W = GRID_SIZE * FIELD_COL + 300;
      //const SCREEN_H = GRID_SIZE * FIELD_ROW
      //Grid size | Unit: pixel
      const GRID_SIZE = 30;
      //var canvas = document.getElementById("canvas");

      var ban_ar = new Array(width)
      for(var i=0; i<ban_ar.length; i++){
        ban_ar[i] = new Array(height)
      }

      for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
          if (words[x][y] == ''){
            ban_ar[x][y] = 0;
          }
          else{
            ban_ar[x][y] = 1;
            this.ctx.drawRect(x*GRID_SIZE, y*GRID_SIZE, 30, 30)
            this.ctx.write_text(words[x][y], 12, x*GRID_SIZE+GRID_SIZE/4, y*GRID_SIZE+2*GRID_SIZE/3, GRID_SIZE);
          }
        }
      }
      // Word list
      //for(var j=0; j<word_list.length; j++){
      //  write_text('🔲' + word_list[j], 18, width*GRID_SIZE+GRID_SIZE*3, j*GRID_SIZE+2*GRID_SIZE/3, SCREEN_W/3);
      //}
    },

  },
  mounted() {
    // mounted 以降で canvas の DOM にアクセスできる
    // CreateJS などを使うときにも、ここで canvas と紐付ける
    // console.log(this.$el)
    this.ctx = this.$el.getContext('2d')
    this.draw(this.radius)
    this.board.init_board()
    this.display(15,15,30)
  },
}
</script>

<style scoped>
.canvas {
  border: 1px solid #000;
}
</style>