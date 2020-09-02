import Vue from 'vue';
import NotifyTpl from './notify.vue';

const NoticeConstructor = Vue.extend(NotifyTpl);

let nId = 1;

const Notify = (options) => {
  const id = `notice-${nId++}`;
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options,
    };
  }

  const NoticeInstance = new NoticeConstructor({
    data: options,
  });
  NoticeInstance.id = id;
  NoticeInstance.vm = NoticeInstance.$mount();
  NoticeInstance.vm.visible = true;
  NoticeInstance.vm.type = options.type;
  NoticeInstance.dom = NoticeInstance.vm.$el;
  document.body.appendChild(NoticeInstance.dom);
  NoticeInstance.dom.zIndex = nId + 1001;
  return NoticeInstance.vm;
};
['info', 'warning', 'primary', 'danger'].forEach((type) => {
  Notify[type] = (options) => {
    if (typeof options === 'string') {
      options = {
        message: options,
      };
    }
    options.type = type;
    return Notify(options);
  };
});

export default Notify;
