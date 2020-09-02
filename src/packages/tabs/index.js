import Tabs from './tabs.vue';
import './tabs.scss';

Tabs.install = function install(Vue) {
  Vue.component(Tabs.name, Tabs);
};
export default Tabs;
