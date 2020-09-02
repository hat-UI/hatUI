import NavBar from './navbar.vue';
import './navbar.scss';

NavBar.install = function install(Vue) {
  Vue.component(NavBar.name, NavBar);
};

export default NavBar;
