import Vue from 'vue';
import ToastTpl from './toast.vue';

const ToastConstructor = Vue.extend(ToastTpl);

let nId = 1;

const Toast = (options) => {
  const id = `toast-${nId++}`;
  options = typeof options === 'string' ? ({
    text: options,
    type: 'message'
  }) : options;

  const ToastInstance = new ToastConstructor({
    data: options
  });
  ToastInstance.id = id;
  ToastInstance.vm = ToastInstance.$mount();
  ToastInstance.dom = ToastInstance.vm.$el;
  ToastInstance.vm.visible = true;
  document.body.appendChild(ToastInstance.dom);
  ToastInstance.dom.zIndex = nId + 1001;
  return ToastInstance.vm;
};

export default Toast;
