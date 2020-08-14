import Button from "./packages/Button";
import Icon from "./packages/Icon";
import Toast from "./packages/Toast"
import Switch from "./packages/Switch"
import DatePicker from "./packages/DatePicker"
import StepGroup from "./packages/StepGroup"
import Step from "./packages/Step"
import Loading from "./packages/Loading"
import mixins from './mixins'
const components = [Button,Icon,Toast,Switch,DatePicker,StepGroup,Step,Loading];

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
