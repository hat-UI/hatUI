import Button from './button.vue';
import './button.scss';

Button.install = function install (Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
