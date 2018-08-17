import Vue from 'vue'
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      steemconnect: Vue.SteemConnectStore
    }
  })
}

export default createStore
