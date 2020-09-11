import * as type from '../types'

const state = {
  showSidebar: false,
  searchHistory: ['vae', '周杰伦', '林俊杰', '五月天']
}

const getters = {
  showSidebar: state => state.showSidebar,
  searchHistory: state => state.searchHistory
}

const mutations = {
  [type.COM_SHOW_SIDE_BAR](state, status) {
    state.showSidebar = status
  },
  [type.COM_DELETE_SEARCH_HISTORY](state, index) {
    state.searchHistory.splice(index, 1)
  },
  [type.COM_CLEAR_SEARCH_HISTORY](state) {
    state.searchHistory = []
  }
}

const actions = {
  setShowSidebar({ commit }, status) {
    commit(type.COM_SHOW_SIDE_BAR, status)
  },
  deleteSearchHistory({ commit }, index) {
    commit(type.COM_DELETE_SEARCH_HISTORY, index)
  },
  clearSearchHistory({ commit }) {
    commit(type.COM_CLEAR_SEARCH_HISTORY)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}