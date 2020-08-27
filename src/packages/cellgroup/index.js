import CellGroup from './cellgroup.vue';
import './cellgroup.scss'

CellGroup.install = function install(Vue) {
    Vue.component(CellGroup.name, CellGroup);
}

export default CellGroup;