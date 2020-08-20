### Datepicker日历

### 引入

```js
import Vue from 'vue';
import { DatePicker } from 'hatUI';
Vue.use(DatePicker);
```

### 代码演示

- Datepicker日历

DatePicker支持type为 `range`,`single`、`multiple`三种类型，默认为`range`

- 支持选择单个日期演示
```js
<template>
  <div class="datepicker-wrapper">
     <hat-button type="danger" size="small" @click="changeHandle">选择单个日期</hat-button>
     <span>{{date}}</span>
    <hat-datepicker :show="show" type="single" @closed="changeHandle" @change="setDate"></hat-datepicker>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      date: ''
    };
  },
  methods: {
    setDate(val) {
        this.date = val
    },
    changeHandle() {
      this.show = !this.show
    },
  },
};
</script>
```
- 支持多个日期选择

```vue
<template>
<div>
    <hat-button  size="small" @click="changeHandle">选择多个日期</hat-button>
     <span>{{date}}</span>
    <hat-datepicker :show="showMultiple" type="multiple" @closed="changeHandle" @change="setDate"></hat-datepicker>
</div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      date: ''
    };
  },
  methods: {
    setDate(val) {
        this.date = val
    },
    changeHandle() {
      this.show = !this.show
    },
  },
};
</script>
```
- 支持选择日期范围

```js
<template>
  <div>
    <span>{{date}}</span>
    <hat-datepicker :show="showRange" type="range" @closed="changeHandle" @change="setDate"></hat-datepicker>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      date: ''
    };
  },
  methods: {
    setDate(val) {
        this.date = val
    },
    changeHandle() {
      this.show = !this.show
    },
  },
};
</script>

```

### props

| 字段    | 说明    | 类型 |默认值|
| :------------- |:-------------:| :-----:|:-------:|
| type  | 日历类型，支持single、range、multiple | String |range|
| format  | 支持时间返回格式YYYY-MM-DD YYYY/MM/DD   |  String |YYYY-MM-DD|
| closedIcon | 是否显示DatePicker的关闭按钮   | Boolean| false|
|show|DatePicker显示和隐藏|Boolean|false|

### Events

| 事件名    | 说明   |
| ------------- |:-------------:|
| closed  | Datepicker关闭事件 | 
| change  |  选择日历数据发生改变时触发，参数在type为sngle为字符串，其余情况为数组数据 | 

<ClientOnly>
  <demo componentName="datepicker" />
</ClientOnly>

