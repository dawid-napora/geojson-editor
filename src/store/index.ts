import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export interface State {
  theme: 'light' | 'dark';
}

const state: State = {
  theme: 'light'
}

export default new Vuex.Store<State>({ state })
