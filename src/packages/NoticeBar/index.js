import NoticeBar from './noticebar.vue';
import './noticebar.scss';


NoticeBar.install = function install(Vue) {
  Vue.component(NoticeBar.name, NoticeBar);
};

export default NoticeBar;