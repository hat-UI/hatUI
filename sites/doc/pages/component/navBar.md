### NavBar导航栏

### 引入

```js
import Vue from 'vue';
import { NavBar } from 'hatUI';
Vue.use(NavBar);
```

### 代码演示

- NavBar导航栏支持自定义左右边导航部分，中间标题部分可以自定义。

下面是默认导航栏

```js
<template>
  <hat-navbar></hat-navbar>
</template>
```
- 更改`NavBar`标题,通过更改`props`为title的属性。

```vue
<template>
  <hat-navbar title="自定义标题"></hat-navbar>
</template>
```
- 修改`NavBar`左边按钮导航部分和右边导航部分

```js
<template>
    <hat-navbar>
      <hat-icon type="search" slot="left-icon"></hat-icon>
      <hat-icon type="menu" slot="right-icon"></hat-icon>
    </hat-navbar>
</template>
```
- 为`NavBar`添加下边框
```js
<template>
    <hat-navbar border></hat-navbar>
</template>
```

- `NavBar`固定在顶部

`zIndex`只有设置`fixed`之后才能生效

```js
<template>
    <hat-navbar border fixed :zIndex="99"></hat-navbar>
</template>
```

### props

| 字段    | 说明    | 类型 |默认值|
| ------------- |:-------------:| -----|-------|
| title  | NavBar的自定义标题 | String |'标题'|
| border  | 是否在NavBar下面添加下边框  |  Boolean |false|
| fixed | 是否固定NavBar在顶部  | Boolean| false|
|ZIndex|NavBar的层级关系，只有在设置了fixed才生效|String|Number|""|

### Events

| 事件名    | 说明   |
| ------------- |:-------------:|
| click-left  | 点击左边按钮部分自定义事件，参数为$event | 
| click-right  |  点击右边按钮部分自定义事件，参数为$event | 

<ClientOnly>
  <demo componentName="navbar" />
</ClientOnly>

