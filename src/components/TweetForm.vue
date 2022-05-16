<template>
  <div id="tweet-form">
    <form @submit.prevent="submitTweet">
      <label class="new-tweet">New Tweet</label>
      <textarea name="tweet" v-model="state.tweet" placeholder="What's happening?"></textarea>
      <div class="charaters-left"> {{getCharacterCount}} characters remaining</div>
      <button :disabled="canUserTweet" class="tweet-button">Tweet</button>
    </form>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: "TweetForm",
  setup(props, context) {
    const state = reactive({
      tweet: "",
      maxCharacterCount: 180,
    })

    const getCharacterCount = computed(() => state.maxCharacterCount - state.tweet.length)
    const canUserTweet = computed(() => {
      if( state.tweet.length <= 0 ){
        return true;
      }else{
        return state.tweet.length >= state.maxCharacterCount
      }
    })

    function submitTweet() {
        context.emit("tweeted", state.tweet)
        // reset state
        state.tweet = ""

    }

    return {
      state,
      getCharacterCount,
      canUserTweet,
      submitTweet,
    }
  }

}
</script>

<style>
#tweet-form {
  margin-top: 20px;
}

.new-tweet{
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
}
textarea{
  width: 300px;
  height: 100px;
  border: #2c3e50 solid 1px;
  border-radius: 5px;
  padding: 10px;
  font-size: 1.2em;
  background-color: #ccc;
  color:#2c3e50;
}

.tweet-button {
  background-color: #2c3e50;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 8px 24px;
  margin-top: 10px;
  font-size:1.1em;
}

</style>
