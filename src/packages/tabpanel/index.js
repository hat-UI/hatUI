import TabPanel from './tabpanel.vue';
import './tabpanel.scss';


TabPanel.install = function install(Vue) {
  Vue.component(TabPanel.name, TabPanel);
};

export default TabPanel;
