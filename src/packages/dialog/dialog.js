import Vue from 'vue';
import DialogTpl from './dialog.vue';

const DialogConstructor = Vue.extend(DialogTpl);

let nId = 1;

const Dialog = (options) => {
  const id = `dialog-${nId++}`;
  const DialogInstance = new DialogConstructor({
    propsData: { ...options }
  });
  DialogInstance.id = id;
  DialogInstance.vm = DialogInstance.$mount();
  DialogInstance.vm.visible = true;
  DialogInstance.dom = DialogInstance.vm.$el;
  document.body.appendChild(DialogInstance.dom);
  DialogInstance.dom.zIndex = nId + 1001;
  return DialogInstance.vm;
};

export default Dialog;
