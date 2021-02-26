import { shallowMount } from '@vue/test-utils';
import Footer from '@/views/Footer.vue';

describe('Footer.vue', () => {
  it('renders as expected', () => {
    const wrapper = shallowMount(Footer, {
      stubs: ['v-footer', 'v-spacer'],
    });
    expect(wrapper).toMatchSnapshot();
  });
});
