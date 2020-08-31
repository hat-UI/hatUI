import Dialog from './dialog.js';
import './dialog.scss'


Dialog.install = function install(Vue) {
    Vue.prototype.$dialog = Dialog;
}

export default Dialog;
