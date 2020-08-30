### Loading 加载

### 引入

```js
import Vue from 'vue';
import { DatePicker } from 'hatUI';
Vue.use(DatePicker);
```

### 代码演示

- loading加载组件

Loading组件支持不同颜色的加载，通过`color`属性控制
```js
<template>
    <div class="cell-wrapper">
      <hat-cell-group circle>
        <hat-cell title="Loading加载">
          <hat-loading  slot="right" color="#07c160"></hat-loading>
        </hat-cell>
        <hat-cell title="红色loading">
          <hat-loading  slot="right" color="#f00"></hat-loading>
        </hat-cell>
        <hat-cell title="蓝色loading">
          <hat-loading  slot="right" color="#00f"></hat-loading>
        </hat-cell>
        <hat-cell title="蓝色loading">
          <hat-loading  slot="right" color="#00f"></hat-loading>
        </hat-cell>
      </hat-cell-group>
    </div>
</template>
```
- 支持不同尺寸的loading组件，通过size属性控制。

```vue
<template>
  <hat-cell title="不同size的loading">
    <hat-loading  slot="right" color="#00f" :size="100"></hat-loading>
  </hat-cell>
</template>
```

### props

| 字段    | 说明    | 类型 |默认值|
| :------------- |:-------------:| :-----:|:-------:|
| show  | 控制loading组件是否显示 | Boolean |true|
| tips  | 设置loading组件显示的提示信息   |  String |''|
| color | 设置loading组件的颜色值   | String| ''|
|size|设置loading组件的尺寸大小|Number|50|

<ClientOnly>
  <demo componentName="loading" />
</ClientOnly>

