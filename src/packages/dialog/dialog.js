import Vue from 'vue';
import DialogTpl from './dialog.vue';

const DialogConstructor = Vue.extend(DialogTpl);

let nId = 1;

const Dialog = (options) => {
  options.id = options.id || 'hat-dialog-default-id';
  const DialogInstance = new DialogConstructor({
    propsData: options
  });
  DialogInstance.id = options.id;
  DialogInstance.vm = DialogInstance.$mount();
  DialogInstance.vm.visible = true;
  DialogInstance.dom = DialogInstance.vm.$el;
  let dialogDom = document.querySelector('#' + options.id);
  if (options.id && dialogDom) {
    dialogDom.parentNode.replaceChild(DialogInstance.$el, dialogDom);
  } else {
    document.body.appendChild(DialogInstance.$el);
  }
  DialogInstance.dom.zIndex = (nId++) + 1001;
  return DialogInstance.vm;
};

export default Dialog;