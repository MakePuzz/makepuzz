<template>
  <b-container>
    <b-row class="mx-2 my-5">
      <b-col md="4">
        <b-img
            :src="require('../assets/images/logo_c.png')"
            height=200
            width=200
            alt="MakePuzz logo"
            class="mx-auto d-block"
        />
      </b-col>
      <b-col md="8" class="mt-3 mt-md-0">
        <h2>We are MakePuzz</h2>
        <p><i>Make a buzz with making a puzzle</i></p>
        <p>当ページは現在メンテナンス中です。お問い合わせは <a href="https://twitter.com/MakePuzz_PR">公式Twitter</a> までお願いいたします。</p>
      </b-col>
    </b-row>
    <hr>
    <b-row class="mx-2 my-5">
      <b-col md="7">
        <h3>What's New</h3>
        <ul>
          <li>2020-11-30：HPを開設しました</li>
        </ul>
      </b-col>
      <b-col md="5" class="mt-4 border-left">
        <Twitter/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Twitter from "@/components/Twitter";
export default {
  name: 'Home',
  components: {Twitter},
  data: () => ({})
}
</script>
