<template>
  <div
      style="width:350px;"
  >
    <Timeline
        :id="twitterId"
        sourceType="profile"
        :options="{ 'height': 600 }"/>
  </div>
</template>

<script>
import {Timeline} from 'vue-tweet-embed'

export default {
  components: {
    Timeline
  },
  data() {
    return {
      twitterId: 'MakePuzz_PR',
    }
  },
}
</script>