<template>
<div class="tweet">
  <div class="tweet-content">{{state.tweet.content}}</div>
  <div class="tweet-footer">
    <div class="tweet-footer-likes">
      likes: {{state.tweet.likes}}
    </div>
    <div class="tweet-footer-retweets">
      retweets:
      {{state.tweet.retweets}}
    </div>
    <div class="tweet-footer-date">
      {{state.tweet.datePosted}}
    </div>
  </div>
</div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: "UserTweets",
  props: {
    tweet: Object,
    userName: String
  },
  setup(props) {
    const state = reactive({
      tweet: props.tweet,
      userName: props.userName,
    })


    return {
      state,
    }
  }
}
</script>

<style>
.tweet {
  border: #2c3e50 solid 1px;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  width:300px;
  font-style: italic;
}
.tweet-content {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  padding:8px;
}

.tweet-footer{
  display: flex;
  justify-content: space-between;
}

</style>
