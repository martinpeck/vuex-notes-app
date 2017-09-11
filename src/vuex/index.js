import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

// the root, initial state object
const state = {
    counter: 0,
    notes: [],
    activeNote: {}
}

// create Vuex instance and export
export default new Vuex.Store({
    strict: false,
    state,
    actions,
    mutations,
    getters
})