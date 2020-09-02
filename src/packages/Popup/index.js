import Popup from './popup.vue';
import './popup.scss';

Popup.install = function install (Vue) {
  Vue.component(Popup.name, Popup);
};

export default Popup;
