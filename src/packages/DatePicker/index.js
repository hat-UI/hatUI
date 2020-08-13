import DatePicker from './datepicker.vue';
import './datepicker.scss';


DatePicker.install = function install(Vue) {
  Vue.component(DatePicker.name, DatePicker);
};

export default DatePicker;