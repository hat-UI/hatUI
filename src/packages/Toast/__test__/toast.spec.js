import { shallowMount } from '@vue/test-utils';
import Toast from '../toast.vue';

describe('test Toast.vue', () => {
  const wrapper = shallowMount(Toast);
  it('test toast', () => {
    wrapper.setData({ text: '测试toast', visible: true });

    return Vue.nextTick().then(() => {
      expect(wrapper.isVisible()).toBe(true);
    });
  });
});
