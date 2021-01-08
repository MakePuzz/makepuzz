<template>
  <v-app id="app">
    <v-main>
      <v-row>
        <v-col cols="2"/>
        <v-col cols="8">
          <router-view/>
        </v-col>
        <v-col cols="2"/>
      </v-row>
    </v-main>
    <footer class="footer">
      <v-container>
        <p class="text-center">© 2020 – MakePuzz</p>
      </v-container>
    </footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  mounted: function () {
    const routeInstance = this.$route;
    this.createTitleDesc(routeInstance);
  },

  methods: {
    createTitleDesc: routeInstance => {
      if (routeInstance.meta.title) {
        document.title = 'MakePuzz | ' + routeInstance.meta.title;
      } else {
        document.title = 'MakePuzz'
      }
    }
  }
}
</script>

<style>
@import "./css/styles.css";

#app {
  font-family: "SourceHanSansJP", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, sans-serif;
  color: rgb(101, 92, 93);
}
</style>
