<template>
  <Timeline
      :id="twitterId"
      sourceType="profile"
      :options="{ 'height': 600 }"
  />
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