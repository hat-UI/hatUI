
import Step from './step.vue';
import './step.scss';

Step.install = function install(Vue) {
  Vue.component(Step.name, Step);
};

export default Step;
