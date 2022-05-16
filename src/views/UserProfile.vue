<template>
<div class="avatar-container"><img :src="getImageUrl(state.user.image)" :alt="state.user.userName" /></div>
<div><h1 class="profile-user-name">{{ state.user.userName }}</h1></div>
<div class="profile-followers">Followers: {{ state.user.followers }}</div>
<button @click="followUser" class="follow-button">Follow</button>
<div class="admin" v-if="state.user.isAdmin">Admin</div>
<TweetForm @tweeted="addTweet" />
<div class="tweets">
  <UserTweets
    v-for="tweet in state.user.tweets"
    :tweet="tweet"
    :userName="state.user.userName"
    :key="tweet.id"
  />
</div>
</template>

<script>
import { reactive, computed } from 'vue'
import { useRoute } from 'vue-router'
import { users } from "../assets/users";
import UserTweets from '../components/UserTweets.vue'
import TweetForm from '../components/TweetForm.vue'

export default {
  name: "UserProfile",
  components: { UserTweets, TweetForm },
  setup() {
    const route = useRoute()
    // assign and get the id from the route in the url.
    const userId = computed(() => route.params.userId)
    const state = reactive({
      user: users[userId.value - 1] || users[0]
    })

    function addTweet(tweet) {
        state.user.tweets.unshift({
        id: state.user.tweets.length + 1,
        content: tweet,
        likes: 0,
        retweets: 0,
        datePosted: new Date().toLocaleString().split(',')[0]
      })
    }

    function getImageUrl(pic) {
      return require('../assets/' + pic)
    }

    return {
      state,
      addTweet,
      getImageUrl,
      userId
    }
  }
}
</script>

<style>
.avatar-container {
  margin-top: 20px;
}
.avatar-container img {
  width: 200px;
  height: 200px;
  border: #2c3e50 solid 6px;
  border-radius: 50%;
}
.profile-user-name{
  margin-bottom: 0px;
}
.profile-followers{
  font-size:1.1em;
  margin-bottom :10px;
}
.follow-button{
  background-color: #2c3e50;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 8px 24px;
  margin-top: 10px;
  font-size:1.1em;
}
.admin{
  color: #2c3e50;
  font-size:1.1em;
  margin-top: 10px;
}
.tweets{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top:20px;
}

</style>
