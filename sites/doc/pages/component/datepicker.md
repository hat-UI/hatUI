### Button按钮

### 引入

```js
import Vue from 'vue';
import { Button } from 'hatUI';
Vue.use(Button);
```

### 代码演示

- 按钮类型

按钮支持 `primary`、`info`、`warning`、`danger`、`default`五种类型，默认为`default`

```js
<hat-button type="primary" size="small">主要按钮</hat-button>
<hat-button type="info" size="small">信息按钮</hat-button>
<hat-button type="warning" size="small">警告按钮</hat-button>
<hat-button type="danger" size="small">危险按钮</hat-button>
```



### props

| 字段    | 说明    | 类型 |默认值|
| :------------- |:-------------:| :-----:|:-------:|
| type  | 按钮类型，支持primary、info、danger、info、default | String |default|
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
  <demo componentName="datepicker" />
</ClientOnly>

