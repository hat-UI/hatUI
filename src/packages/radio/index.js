import Radio from './radio.vue';
import './radio.scss';

Radio.install = function install(Vue) {
  Vue.component(Radio.name, Radio);
};

export default Radio;
