import Button from "./packages/Button/index.js";
import "./packages/Button/button.scss";
import Icon from "./packages/Icon/index.js";
import "./packages/Icon/icon.scss";
import Toast from "./packages/Toast/index.js"
import Switch from "./packages/Switch/index.js"
const components = [Button,Icon,Toast,Switch];

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components
};
