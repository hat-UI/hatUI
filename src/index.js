import Button from "./packages/Button/index.js";
import Icon from "./packages/Icon/index.js";
import Toast from "./packages/Toast/index.js"
import Switch from "./packages/Switch/index.js"
import DatePicker from "./packages/DatePicker/index.js"
import StepGroup from "./packages/StepGroup/index.js"
import Step from "./packages/Step/index.js"
import mixins from './mixins/index.js'
const components = [Button,Icon,Toast,Switch,DatePicker,StepGroup,Step];

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  });
  Vue.use(mixins)
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components
};
