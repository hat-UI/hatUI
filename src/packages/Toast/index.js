import Toast from './toast.js';
import './toast.scss';

Toast.install = function (Vue) {
  Vue.prototype.$toast = Toast;
};

export default Toast;
