import Loading from './loading.vue';
import './loading.scss';


Loading.install = function install(Vue) {
  Vue.component(Loading.name, Loading);
};

export default Loading;
