import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders as expected', () => {
    const wrapper = shallowMount(HelloWorld, {
      stubs: ['v-container', 'v-row', 'v-col', 'v-img'],
    });
    expect(wrapper).toMatchSnapshot();
  });
});
