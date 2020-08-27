import Notify from './notify.js';
import './notify.scss'


Notify.install = function install(Vue) {
    Vue.prototype.$notify = Notify;
}

export default Notify;
