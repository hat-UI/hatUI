import Field from './field.vue';
import './field.scss';

Field.install = function install (Vue) {
  Vue.component(Field.name, Field);
};

export default Field;
