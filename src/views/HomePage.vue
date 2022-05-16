<template>
<div class="homepage">
  <h1> Welcome to Twitter </h1>
  <div class="users-list">
    <router-link v-for="user in users" :to="{ name: 'UserProfile', params: { userId: user.id } }" :key="user.id" class="card">
      {{ user.userName }}
    </router-link>
  </div>
</div>
</template>

<script>
import { users } from "../assets/users";

export default {
  name: "HomePage",
  setup() {
    return {
      users
    }
  }
}
</script>

<style>
.users-list{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  text-decoration: none;
  color: #fff;
  background-color: #2c3e50;
  padding:8px;
  border-radius:12px;
  margin:8px 0px;
}

</style>
