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
import "./packages/step/step.scss"
import Loading from "./packages/loading/index.js"
import "./packages/loading"
import Popup from "./packages/popup/index.js"
import "./packages/popup/popup.scss"
import ActionSheet from "./packages/actionsheet/index.js"
import "./packages/actionsheet/actionsheet.scss"
import Upload from './packages/upload/index.js';
import './packages/upload/upload.scss';
import Radio from './packages/radio/index.js';
import './packages/radio/radio.scss';
import RadioGroup from './packages/radiogroup/index.js';
import './packages/radiogroup/radiogroup.scss';
import Checkbox from './packages/checkbox/index.js';
import './packages/checkbox/checkbox.scss';
import CheckboxGroup from './packages/checkboxgroup/index.js';
import './packages/checkboxgroup/checkboxgroup.scss';
import Slider from './packages/slider/index.js';
import './packages/slider/slider.scss';
import Tabs from './packages/tabs/index.js';
import './packages/tabs/tabs.scss';
import TabPanel from './packages/tabpanel/index.js';
import './packages/tabpanel/tabpanel.scss';
import NavBar from './packages/navbar/index.js';
import './packages/navbar/navbar.scss';
import NoticeBar from './packages/noticebar/index.js';
import './packages/noticebar/noticebar.scss';
import TabBar from './packages/tabbar/index.js';
import './packages/tabbar/tabbar.scss';
import Badge from './packages/badge/index.js'
import './packages/badge/badge.scss'
import SearchBar from './packages/searchbar/index.js'
import './packages/searchbar/searchbar.scss'
import Cell from './packages/cell/index.js'
import './packages/cell/cell.scss'
import CellGroup from './packages/cellgroup/index.js'
import './packages/cellgroup/cellgroup.scss'
import Notify from './packages/notify/index.js'
import './packages/notify/notify.scss'
import Field from './packages/field/index.js'
import './packages/field/field.scss'
import Dialog from './packages/dialog/index.js'
import './packages/dialog/dialog.scss'
// import mixins from './mixins'
const components = [
  Button,
  Icon,
  Switch,
  DatePicker,
  StepGroup, 
  Step, 
  Loading, 
  Popup, 
  ActionSheet, 
  Upload, 
  Radio, 
  RadioGroup, 
  Checkbox, 
  CheckboxGroup, 
  Slider, 
  Tabs, 
  TabPanel, 
  NavBar, 
  NoticeBar, 
  TabBar, 
  Badge, 
  SearchBar,
  Cell,
  CellGroup,
  Field
];
const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$notify = Notify;
  Vue.prototype.$toast = Toast;
  Vue.prototype.$dialog = Dialog
  // Vue.use(mixins)
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components
};