import { shallowMount } from '@vue/test-utils';
import { mount } from '@vue/test-utils';

import Controls from '@/components/TodoTile/Controls.vue';

describe('Controls.vue', () => {
  it('check isExpanded:true property', () => {
    const isExpanded = true;
    const wrapper = shallowMount(Controls, {
      propsData: { isExpanded },
    });

    const selector = wrapper.find('.rotate');
    expect(selector.exists()).toBe(true);
  });

  it('check isExpanded:false property', () => {
    const isExpanded = false;
    const wrapper = shallowMount(Controls, {
      propsData: { isExpanded },
    });

    const selector = wrapper.find('.rotate');
    expect(selector.exists()).toBe(false);
  });
});

describe('Controls.vue', () => {
  it('Click Expand button', async () => {
    const isExpanded = false;
    const wrapper = mount(Controls, {
      propsData: { isExpanded },
    });
    wrapper.find('button').trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted()['click-expand']).toBeTruthy();
  });

  it('Click Delete button', async () => {
    const isExpanded = false;
    const wrapper = mount(Controls, {
      propsData: { isExpanded },
    });
    wrapper.find('button.delete').trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted()['click-delete']).toBeTruthy();
  });
});
