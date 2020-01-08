import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const mutations = {
  add(state) {
    state.count++
  }
}

const actions = {
  add:({ commit  })=>{
    commit("add")
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})