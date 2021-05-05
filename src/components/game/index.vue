<template>
  <b-container>
    <b-row class="mx-2 my-3">
        <p><i>"Make a buzz with making a puzzle {{radius}}</i></p>
    </b-row>
    <b-row>
      <b-col md="12">
        <div class="example" align="center">
        <MyCanvas :radius="radius"/>
        <p><input type="range" min="0" max="150" v-model.number="radius"></p>
        </div>
      </b-col>
    </b-row>


    <b-row>
      <b-col md="12">
        <div>
          <b-card no-body>
            <b-tabs pills card vertical>
              <b-tab title="2" active><b-card-text>Tab contents 2</b-card-text></b-tab>
              <b-tab title="3"><b-card-text>Tab contents 3</b-card-text></b-tab>
              <b-tab title="4"><b-card-text>Tab contents 4</b-card-text></b-tab>
            </b-tabs>
          </b-card>
        </div>
      </b-col>
    </b-row>


  </b-container>
</template>

<script>
// キャンバス用コンポーネントの読み込み
import MyCanvas from './MyCanvas.vue'
export default {
  components: {
    MyCanvas
  },
  data() {
    return {
      radius: 50,
    }
  }
}

</script>