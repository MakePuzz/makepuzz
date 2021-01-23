<template>
  <div id="app">
    <main>
      <router-view/>
    </main>
    <footer class="footer">
      <b-container>
        <p class="text-center">© 2020 – MakePuzz</p>
      </b-container>
    </footer>
  </div>
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
