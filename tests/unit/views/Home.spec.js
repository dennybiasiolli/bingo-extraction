import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Home from '@/views/Home.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Home.vue', () => {
  let state; let getters; let mutations; let store;
  beforeEach(() => {
    state = {
      availableNumbers: [...Array(90).keys()].map((i) => i + 1),
      extractedNumbers: [],
    };
    getters = {
      ascendingExtractedNumbers: (s) => [...s.extractedNumbers].sort((a, b) => a - b),
    };
    mutations = {
      extractNumber: jest.fn()
        .mockImplementationOnce(() => {
          const extracted = state.availableNumbers.splice(11, 1);
          state.extractedNumbers = state.extractedNumbers.concat(extracted);
        })
        .mockImplementationOnce(() => {
          const extracted = state.availableNumbers.splice(87, 1);
          state.extractedNumbers = state.extractedNumbers.concat(extracted);
        }),
    };
    store = new Vuex.Store({
      state, getters, mutations,
    });
  });

  const shallowMountComponent = () => shallowMount(Home, {
    store,
    localVue,
    stubs: ['v-container', 'v-btn', 'v-row', 'v-col'],
  });

  it('renders as expected', () => {
    const wrapper = shallowMountComponent();
    expect(wrapper).toMatchSnapshot();
  });

  it('extracts a number and render as expected', async () => {
    const wrapper = shallowMountComponent();
    wrapper.vm.extractNumber();
    expect(mutations.extractNumber).toHaveBeenCalled();
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
    wrapper.vm.extractNumber();
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
  });
});
