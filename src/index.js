import Button from "./packages/button/index.js";
import './packages/button/button.scss'
import Icon from "./packages/icon/index.js";
import "./packages/icon/icon.scss";
import Toast from "./packages/toast/index.js"
import "./packages/toast/toast.scss";
import Switch from "./packages/switch/index.js"
import "./packages/switch/switch.scss";
import DatePicker from "./packages/datepicker/index.js"
import "./packages/switch/switch.scss";
import StepGroup from "./packages/stepgroup/index.js"
import "./packages/stepgroup/stepgroup.scss";
import Step from "./packages/step/index.js"
import"./packages/step/step.scss"
import Loading from "./packages/loading/index.js"
import "./packages/loading"
import Popup from "./packages/popup/index.js"
import "./packages/popup/popup.scss"
import mixins from './mixins'
const components = [Button,Icon,Toast,Switch,DatePicker,StepGroup,Step,Loading,Popup];
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
