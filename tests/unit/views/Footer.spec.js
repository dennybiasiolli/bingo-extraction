import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Footer from '@/views/Footer.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Footer.vue', () => {
  let state; let getters; let store;
  beforeEach(() => {
    state = {
      availableNumbers: [...Array(15).keys()].map((i) => i + 1),
      extractedNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
    getters = {
      reversedExtractedNumbers: (s) => [...s.extractedNumbers].sort((a, b) => a - b),
    };
    store = new Vuex.Store({ state, getters });
  });

  it('renders as expected', () => {
    const wrapper = shallowMount(Footer, {
      store,
      localVue,
      stubs: ['v-footer', 'v-spacer'],
    });
    expect(wrapper).toMatchSnapshot();
  });
});
