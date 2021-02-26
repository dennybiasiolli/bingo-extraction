import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  it('renders as expected', () => {
    const wrapper = shallowMount(App, {
      stubs: ['v-app', 'v-app-bar', 'v-img', 'v-spacer', 'v-btn', 'v-icon', 'v-main'],
    });
    expect(wrapper).toMatchSnapshot();
  });
});
