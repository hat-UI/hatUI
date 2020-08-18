import Checkbox from './checkbox.vue'
import './checkbox.scss'

Checkbox.install = function install(Vue) {
    Vue.component(Checkbox.name, Checkbox);
};

export default Checkbox;