import Toast from './toast';
import './toast.scss'

Toast.install = function (Vue) {
  Vue.prototype['$toast'] = Toast
}

export default Toast;
