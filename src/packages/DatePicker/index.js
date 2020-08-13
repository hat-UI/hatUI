import DatePicker from './component/DatePicker/datepicker.vue';
import './component/DatePicker/datepicker.scss';


DatePicker.install = function install(Vue) {
  Vue.component(DatePicker.name, DatePicker);
};

export default DatePicker;