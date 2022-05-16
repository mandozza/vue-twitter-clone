<template>
  <nav class="top-bar">
    <router-link to="/" class="top-bar-left">
      <div class="top-bar-left-logo"> Twitter </div>
    </router-link>
    <div class="top-bar-right" v-if="user"> {{ user.userName }} </div>
  </nav>
  <router-view/>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup() {
    const store = useStore()
    const user = computed(() => store.state.User.user)

    return {
      user
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}
.top-bar {
  display: flex;
  justify-content: space-between;
  background-color: #1c1e21;
  padding: 20px 0;
  border-bottom: 1px solid #dfe3e7;
  width:100%;
}

.top-bar-right, .top-bar-left {
  padding: 0 60px;
}

.top-bar-left-logo, .top-bar-right {
  color: #fff;
  font-weight: bold;
  font-size:1.3em;
}

a{
  text-decoration: none;
}
</style>
