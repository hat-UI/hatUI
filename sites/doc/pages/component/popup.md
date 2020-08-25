### Popup弹出层

### 介绍

popup弹出层，支持自定义内容，宽高度和弹层的位置


### 引入

```js
import Vue from 'vue';
import { Popup } from 'hatUI';
Vue.use(Popup);
```

### 基本用法(选择类)

- 默认使用方法

```js
<template>
    <div>
        <hat-button size="small" type="info" @click="changeHandle">默认底部popup</hat-button>
        <hat-popup :show="show" @closed="changeHandle" ></hat-popup>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: false,
        }
    },
    methods: {
        changeHandle() {
            this.show = !this.show
        }
    }
}
</script>
```

- 带圆弧形的弹层

在`hat-popup`上设置`circle`值，可以设置带圆弧形的popup弹层

```js
<template>
    <hat-popup :show="show" @closed="changeHandle" circle></hat-popup>
```

- 设置popup弹出层方向

在`hat-popup`上设置`position`值，可以设置弹出层弹出位置,支持`left`、`right`、`top`、`bottom`四个方向

```js
<template>
    <hat-popup :show="show" @closed="changeHandle" position="left"></hat-popup>
</template>
```


### props

| 字段    | 说明    | 类型 |默认值|
| ------- |------------------------------- |----- |------ |
| position  | poup弹出层的方向（top/bottom/left/right） | String |bottom|
| show  | 控制popup显示隐藏   |  Boolean |false|
| width | 设置弹出层的高度（direction为top/bottom）,若为（left/right时）设置宽度   | String或者Number| 25%|
|circle|设置带弧形弹层|Boolean|false|

### Events

| 事件名    | 说明   |
| :------------- |:-------------:|
| closed  | popup隐藏事件句柄 | 

<ClientOnly>
  <demo componentName="popup" />
</ClientOnly>

