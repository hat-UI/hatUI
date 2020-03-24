import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Icon from '../icon.vue';

describe('检测Icon.vue: ', () => {
  const wrapper = shallowMount(Icon);
  it('props 检测', () => {
    wrapper.setProps({ type: 'aixin' });
    expect(wrapper.vm.type).toBe('aixin');
  });
});
