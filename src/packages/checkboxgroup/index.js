import CheckboxGroup from './checkboxgroup.vue'
import './checkboxgroup.scss'

CheckboxGroup.install = function install(Vue) {
    Vue.component(CheckboxGroup.name, CheckboxGroup);
};

export default CheckboxGroup;