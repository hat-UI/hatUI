import Vue from 'vue';

// 这里就是我们刚刚创建的那个静态组件
import toastComponent from './toast.vue';

// 返回一个 扩展实例构造器
const ToastConstructor = Vue.extend(toastComponent);

// 定义弹出组件的函数 接收2个参数, 要显示的文本 和 显示时间
function showToast(text, duration = 2000) {
  // 实例化一个 toast.vue
  const toastDom = new ToastConstructor({
    el: document.createElement('div'),
    data() {
      return {
        text,
        visible: true,
        showAnimation: true,
      };
    },
  });

  // 把 实例化的 toast.vue 添加到 body 里
  if (!document.querySelector('.hat-toast')) {
    document.body.appendChild(toastDom.$el);
  }
  // 动画
  setTimeout(() => { toastDom.showAnimation = false; }, duration - 1250);
  // 过了 duration 时间后隐藏
  setTimeout(() => {
    toastDom.visible = false;
    document.body.removeChild(document.querySelector('.hat-toast'));
  }, duration);
}

export default showToast;
