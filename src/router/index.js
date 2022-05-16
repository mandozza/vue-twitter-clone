import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import { users } from '../assets/users'
import HomePage from '../views/HomePage.vue'
import UserProfile from '../views/UserProfile.vue'
import AdminPage from '../views/AdminPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage,
    meta: {
      requiresAdmin: true
    }
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  // get the user from the store
  const user = store.state.user
  // if the user doesn't exisit assin to the first user.
  if(!user) {
    await store.dispatch('User/setUser', users[0])
  }
  const isAdmin = false
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin)
  if (requiresAdmin && !isAdmin) next({ name: 'Home' })
  else next();

})


export default router
