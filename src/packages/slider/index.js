import Slider from './slider.vue';
import './slider.scss';

Slider.install = function Slider (Vue) {
  Vue.component(Slider.name, Slider);
};

export default Slider;
