import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      stubs: ['v-container', 'v-row', 'v-col', 'v-img'],
      propsData: { msg },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
