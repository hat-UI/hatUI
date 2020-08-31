### Toast 吐司

### 引入

```js
import Vue from 'vue';
import { Toast } from 'hatUI';
Vue.use(Toast);
```

### 代码演示

- `Toast`支持type为 `custom`,`message`、`loading`三种类型，默认为`message`

- `message`用法
```html
<template>
  <div class="cell-wrap">
    <hat-navbar title="toast吐司"></hat-navbar>
    <br />
    <div class="cell-wrapper">
      <hat-cell-group circle>
        <hat-cell icon="heart" title="toast提示" @click="() => $toast('普通文本')"></hat-cell>
      </hat-cell-group>
    </div>
  </div>
</template>
```
- `loading`用法

```vue
<template>
  <div class="cell-wrap">
    <div class="cell-wrapper">
      <hat-cell-group circle>
        <hat-cell icon="heart" title="loading提示" @click="showToaste('toast提示')"></hat-cell>
      </hat-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showToaste(key) {
      this.$toast({
        type: 'loading',
        text: '加载中'
      })
    }
  }
};
```
- `custom`用法
`custom`用法通过指定`icon`属性值指定自定义图案，支持组件库自带icon图标，也支持定义图片资源。
```vue
<template>
  <div class="cell-wrap">
    <div class="cell-wrapper">
      <hat-cell-group circle>
        <hat-cell icon="heart" title="loading提示" @click="customClose('toast提示')"></hat-cell>
      </hat-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    customClose(msg) {
      this.$toast({
        type: 'custom',
        text: msg,
      })
    }
  }
};
</script>
```

### props

| 字段    | 说明    | 类型 |默认值|
| :------------- |:-------------:| :-----:|:-------:|
| icon  | 当type为`custom`时，指定已定义图标使用 | String |'heart'|
| text  | 指定toast吐司的类型，['message','custom','loading']   |  String |'message'|
| duration |  指定toast吐司持续时间，单位为毫秒   | Number| 1500ms|


<ClientOnly>
  <demo componentName="toast" />
</ClientOnly>

