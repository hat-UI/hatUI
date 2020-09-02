import Dialog from './dialog.js';
import DialogTpl from './dialog.vue';
import './dialog.scss';

const DialogArr = { DialogTpl, Dialog };
DialogArr.install = function (Vue) {
  Vue.component(DialogTpl.name, DialogTpl);
  Vue.prototype.$dialog = Dialog;
};

export default DialogArr;
