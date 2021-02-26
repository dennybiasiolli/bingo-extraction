import { shallowMount } from '@vue/test-utils';
import AppBar from '@/views/AppBar.vue';

describe('AppBar.vue', () => {
  it('renders as expected', () => {
    const wrapper = shallowMount(AppBar, {
      stubs: ['v-app-bar', 'v-img', 'v-spacer'],
    });
    expect(wrapper).toMatchSnapshot();
  });
});
