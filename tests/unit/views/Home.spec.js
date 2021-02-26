import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('Home.vue', () => {
  it('renders as expected', () => {
    const wrapper = shallowMount(Home, {
      stubs: ['v-container'],
    });
    expect(wrapper).toMatchSnapshot();
  });
});
