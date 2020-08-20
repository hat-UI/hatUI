### Icon图标

### 介绍

底部弹起的操作面板，可以自定义面板标题，颜色相关的多个选项。


### 引入

```js
import Vue from 'vue';
import { Icon } from 'hatUI';
Vue.use(Icon);
```

### 基本用法(选择类)

- 默认使用方法

```js
<template>
    <div>
        <hat-button size="small" type="info" @click="changeHandle" circle>show</hat-button>
        <hat-actionsheet :show="show" @closed="changeHandle" :actions="actions" ></hat-actionsheet>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: false,
            actions: [ {name: "选项一",color: '#ff0000'},{name: "选项二"loading:true},{name: "选项三",disabled: true,}],
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

- 带取消按钮

在`hat-actionsheet`上设置`cancelText`值，可以设置带取消按钮的动作面板

```js
<template>
    <hat-actionsheet :show="show" @closed="changeHandle" :actions="actions" cancelText="取消"><hat-actionsheet>
</template>
```

- 设置circle

在`hat-actionsheet`上设置`circlw`值，可以设置带圆弧形的动作面板

```js
<template>
    <hat-actionsheet :show="show" @closed="changeHandle" :actions="actions" cancelText="取消" circle><hat-actionsheet>
</template>
```
- 设置closedIcon

在`hat-actionsheet`上设置`closedIcon`值，可以设置带关闭按钮的动作面板

```js
<template>
    <hat-actionsheet :show="show" @closed="changeHandle" :actions="actions" cancelText="取消" closedIcon><hat-actionsheet>
</template>
```
### 自定义标题

```js
<template>
    <hat-actionsheet :show="show" @closed="changeHandle" :actions="actions" cancelText="取消" closedIcon>
        <div slot="header">这是自定义标题</div>
    <hat-actionsheet>
</template>
```


### props

| 字段    | 说明    | 类型 |默认值|
| :------------- |:-------------:| :-----:|:-------:|
| actions  | actionsheet动作面板的选项 | Array |[]|
| circle  | 圆弧形actionshett面板   |  Boolean |false|
| closedIcon | 是否显示actionsheet的关闭按钮   | Boolean| false|
|cancelText|底部按钮取消按钮的文案|String|空字符串|
|title|actionsheet自定义标题|String|'标题'|

### Events

| 事件名    | 说明   |
| :------------- |:-------------:|
| closed  | actionSheet关闭事件 | 
| select  |  actionsheet面板选中单个选项触发的事件 | 

<ClientOnly>
  <demo componentName="icon" />
</ClientOnly>

