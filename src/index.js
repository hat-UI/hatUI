import Button from "./packages/Button/index.js";
import "./packages/Button/button.scss";
import Icon from "./packages/Icon/index.js";
import "./packages/Icon/icon.scss";
const components = [Button,Icon];

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
