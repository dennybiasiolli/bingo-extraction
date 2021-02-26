import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('Home.vue', () => {
  const shallowMountComponent = () => shallowMount(Home, {
    stubs: ['v-container', 'v-btn', 'v-row', 'v-col'],
  });

  it('renders as expected', () => {
    const wrapper = shallowMountComponent();
    expect(wrapper).toMatchSnapshot();
  });

  it('extracts a number and render as expected', async () => {
    jest.spyOn(global.Math, 'random')
      .mockReturnValueOnce(0.123456789)
      .mockReturnValueOnce(0.987654321);
    const wrapper = shallowMountComponent();
    wrapper.vm.handleExtract();
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
    wrapper.vm.handleExtract();
    await wrapper.vm.$nextTick();
    expect(wrapper).toMatchSnapshot();
    jest.spyOn(global.Math, 'random').mockRestore();
  });
});
