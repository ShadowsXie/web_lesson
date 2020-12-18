import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    SET_USER: (state, flag) => {
      state.user = flag
    }
  },
  actions: {
    setUserInfo ({ commit }, flag) {
      commit('SET_USER', flag)
    }
  },
  modules: {
  }
})
