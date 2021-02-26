import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  it('renders as expected', () => {
    const wrapper = shallowMount(App, {
      stubs: ['v-app', 'v-main'],
    });
    expect(wrapper).toMatchSnapshot();
  });
});
