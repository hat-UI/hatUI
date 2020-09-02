import Upload from './upload.vue';
import './upload.scss';

Upload.install = function install(Vue) {
  Vue.component(Upload.name, Upload);
};
export default Upload;
