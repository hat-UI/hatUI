import RadioGroup from './radiogroup.vue'
import './radiogroup.scss'

RadioGroup.install = function install(Vue) {
    Vue.component(RadioGroup.name, RadioGroup);
};

export default RadioGroup;