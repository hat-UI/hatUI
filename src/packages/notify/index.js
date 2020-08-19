import Noticefy from './noticefy.vue';
import './notify.scss'


Noticefy.install = function install(Vue) {
    Vue.component(Noticefy.name,Noticefy)
}

export default Noticefy;
