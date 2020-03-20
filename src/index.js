import Button from "./packages/Button/index.js";
import "./packages/Button/button.scss";
const components = [Button];

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
  Button
};
