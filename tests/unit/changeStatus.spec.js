import { mount } from '@vue/test-utils';
import { createLocalVue } from '@vue/test-utils';

import ToggleSwitch from 'vuejs-toggle-switch';
import { statusLabels } from '@/models/status';

import ChangeStatus from '@/components/TodoTile/ChangeStatus.vue';

const myOptions = {
  layout: {
    backgroundColor: 'transparent',
  },
  items: {
    labels: statusLabels,
  },
};

describe('ChangeStatus.vue', () => {
  it('Test ToggleSwitch activity', async () => {
    const localVue = createLocalVue();
    localVue.use(ToggleSwitch);
    const wrapper = mount(ChangeStatus, {
      data() {
        return {
          myOptions: myOptions,
        };
      },
      localVue,
    });

    await wrapper.vm.$nextTick();
    const liItems = wrapper.findAll('li');

    for (let i = 0; i < statusLabels.length; i++) {
      const label = statusLabels[i];

      wrapper.setData({ selectedValue: label.name });
      await wrapper.vm.$nextTick();

      for (let index = 0; index < liItems.length; index++) {
        const color = index === i ? label.backgroundColor : 'transparent';
        expect(liItems.at(index).html()).toMatch(`background-color: ${color}`);
      }
    }
  });
});
