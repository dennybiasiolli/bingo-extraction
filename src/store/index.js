import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const defaultState = {
  availableNumbers: [...Array(90).keys()].map((i) => i + 1),
  extractedNumbers: [],
};

export const getters = {
  ascendingExtractedNumbers(state) {
    return [...state.extractedNumbers].sort((a, b) => a - b);
  },
  reversedExtractedNumbers(state) {
    return [...state.extractedNumbers].reverse();
  },
};

export const mutations = {
  extractNumber(state) {
    const index = Math.floor(Math.random() * state.availableNumbers.length);
    const extracted = state.availableNumbers.splice(index, 1);
    state.extractedNumbers = state.extractedNumbers.concat(extracted);
  },
};

export const actions = {};

export const modules = {};

export default new Vuex.Store({
  state: defaultState,
  getters,
  mutations,
  actions,
  modules,
});
