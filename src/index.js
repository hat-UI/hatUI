import Button from "./packages/button/index.js";
import "./packages/button/button.scss";
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
