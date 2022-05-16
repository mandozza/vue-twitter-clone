import { createStore } from 'vuex';
import { UserModule } from "./User";
// this is the root state of the store.
// the way this is set up it allows you to have multiple modules in the store.
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    User: UserModule
  }
})
