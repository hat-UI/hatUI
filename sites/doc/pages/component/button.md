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
<hat-button size="small">危险按钮</hat-button>
```
- 按钮大小

按钮支持 `mini`、`small`、`large`三种类型，默认为`small`

```js
<hat-button type="primary" size="small">主要按钮</hat-button>
<hat-button type="info" size="mini">信息按钮</hat-button>
<hat-button type="warning" size="large">警告按钮</hat-button>
```
- 按钮自定义颜色

按钮支持自定义颜色

```js
<hat-button color="linear-gradient(to right, #ff6034, #ee0a24)" size="small">自定义颜色</hat-button>
```
- 带图标按钮

按钮支持带图标

```js
<hat-button color="linear-gradient(to right, #ff6034, #ee0a24)" size="small" icon="camera">朴素按钮</hat-button>
```
- block块级按钮

支持block块级按钮

```js
<hat-button block size="small" icon="camera">块级按钮</hat-button>
```
- plain朴素按钮

支持朴素按钮

```js
<hat-button plain size="small" icon="camera">自定义颜色</hat-button>
```
- 禁止按钮点击

```js
<hat-button disabled size="small" icon="camera">自定义颜色</hat-button>
```



### props

| 字段    | 说明    | 类型 |默认值|
| :------------- |:-------------:| :-----:|:-------:|
| type  | 按钮类型，支持primary、info、danger、info、default | String |default|
| circle  | 圆角按钮   |  Boolean |false|
| round | 椭圆形按钮   | Boolean| false|
|icon|设置带图标的按钮，为图标字符串类型|String|null|
|plain|设置朴素按钮|Boolean|false|
|disabled |设置按钮是否可点击|Boolean|false|
|color |自定义颜色，支持渐变色|String|null|
|size |按钮大小，small、large、mini|String|small|

### Events

| 事件名    | 说明   |
| :------------- |:-------------:|
| click  | 按钮的点击事件 | 

<ClientOnly>
  <demo componentName="button" />
</ClientOnly>

