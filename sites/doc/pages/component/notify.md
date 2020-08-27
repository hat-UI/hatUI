### NoticeBar通知栏

### 引入

```js
import Vue from 'vue';
import { NoticeBar } from 'hatUI';
Vue.use(NoticeBar);
```

### 代码演示

- `NoticeBar`支持text指定需要滚动的文案，也可以通过默认的slot进行自定义滚动的文案。

```js
  <template>
    <hat-noticebar text="这是一段需要滚动的文案"></hat-noticebar>
  </template>
```
- 自定义左边icon图标

```js
  <template>
    <hat-noticebar text="这是一段自定义滚动文案">
      <hat-icon type="search"  slot="icon"></hat-icon>
    </hat-noticebar>
  </template>
```
- 自定义样式

`noticebar`支持自定义样式，通过`color`和`background-color`更改noticebar样式
```js
  <template>
     <hat-noticebar text="这是一条自定义的通知栏" color="#1989fa" backgroundColor="#ecf9ff"></hat-noticebar>
  </template>
```
- 更改`noticebar`滚动速度，通过`speed`属性更改，默认为30px

```js
  <template>
 <hat-noticebar text="这是一条自定义的通知栏" :speed="50"></hat-noticebar>
  </template>
```
- 更改`noticebar`延迟滚动，通过`delay`属性更改，默认为不延迟

```js
  <template>
<hat-noticebar :speed="50">这是一条自定义的通知栏</hat-noticebar>
  </template>
```



### Props

| 字段    | 说明    | 类型 |默认值|
| :------------- |:-------------:| :-----:|:-------:|
| text  | 设置通知栏滚动的文字| String |''|
| speed  | 通知栏滚动速度   |  Number |30| 
| color  | 通知栏的文案颜色   |  String |'#ed6a0c'| 
| backgroundColor  | 通知栏的背景颜色   |  String |'#fffbe8'| 
| delay  | 通知栏延迟滚动时间，以秒算  |  Number |0| 
| scrollable  | 是否可滑动  |  Boolean |true| 


### Slots
| 字段    | 说明    | 类型 |默认值|
| :------------- |:-------------:| :-----:|:-------:|
| icon  | 自定义左侧icon的样式| HTMLELEMENT |''|
| default  | 设置通知栏的滚动内容，设置了text属性该属性不生效   |  HTMLELEMENT |''| 

<ClientOnly>
  <demo componentName="notify" />
</ClientOnly>

