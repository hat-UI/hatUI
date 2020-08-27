### Badge徽标

### 引入

```js
import Vue from 'vue';
import { Badge } from 'hatUI';
Vue.use(Badge);
```

### 代码演示

- `Badge`徽标值设置，通过`value`传递值

```html
<hat-badge :value="34"></hat-badge>
```
- `isDot`设置徽标为圆点提示

```html
<hat-badge isDot></hat-badge>
```
- 自定义徽标颜色,`color`为徽标颜色，`iconColor`为图标颜色，

```js
<hat-badge color="linear-gradient(to right, #ff6034, #ee0a24)" :value="10"></hat-badge>
```
- 通过设置`max`提示最大值，默认最大为`99`，超过就显示`99+`

```html
<hat-badge :value="11" :max="10"></hat-badge>
```
- `zIndex`设置提示圆点或者数字提示层级，默认为1

```html
<hat-badge :value="11" :max="10" :zIndex="10"></hat-badge>
```



### props

| 字段    | 说明    | 类型 |默认值|
| :------------- |:-------------:| :-----:|:-------:|
| value  | 设置徽标提示数值|Number |0|
| isDot  | 徽标以圆点显示提示   |  Boolean |false|
| max | 设置徽标提示数值的最大值   | Number| 99|
|zIndex|设置徽标提示的层级|Number|1|
|color|设置徽标提示部分的颜色|String|'#f61605'|
|iconColor |设置徽标图标的颜色|String|'#f61605'|
|icon |设置徽标图标部分|String|null|

### Slots

| 事件名    | 说明   |默认值|
| :------------- |:-------------:|:--------:|
| default  | 自定义徽标替代图标部分的内容，可以是任何类型内容 |icon图标 |

<ClientOnly>
  <demo componentName="badge" />
</ClientOnly>

