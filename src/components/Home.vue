<template>
  <v-container>
    <v-row class="my-5">
      <v-col cols="4">
        <v-img
            :src="require('../assets/images/logo_c.png')"
            height=200
            width=200
            alt="MakePuzz logo"
            class="ml-10"
        />
      </v-col>
      <v-col cols="8">
        <p class="text-h4 mb-0">We are MakePuzz</p>
        <p class="text-subtitle-1 font-italic font-weight-regular">Make a buzz with making a puzzle</p>
        <p>当ページは現在メンテナンス中です。お問い合わせは <a href="https://twitter.com/MakePuzz_PR">公式Twitter</a> までお願いいたします。</p>
      </v-col>
    </v-row>
    <hr>
    <v-row class="mx-2 my-5">
      <v-col cols="7">
        <h3>What's New</h3>
        <ul>
          <li>2020-11-30：HPを開設しました</li>
        </ul>
      </v-col>
      <v-col cols="5" align="right">
        <Twitter/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Twitter from "@/components/Twitter";
export default {
  name: 'Home',
  components: {Twitter},
  data: () => ({})
}
</script>
