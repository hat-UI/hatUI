### CheckBox多选项

### 引入

```js
import Vue from 'vue';
import { CheckBox } from 'hatUI';
Vue.use(CheckBox);
```

### 代码演示

- 单选项支持圆形、方形

单选项支持 `round`、`default`两种种类型，默认为`default`

```js
  <template>
    <hat-checkbox-group v-model="modelValue">
      <hat-checkbox label="a">男</hat-checkbox>
      <hat-checkbox label="b">女</hat-checkbox>
    </hat-checkbox-group>
  </template>
  <script>
    export default {
      data() {
        return {
          modelValue: 'a'
        }
      }
    }
  </script>
```
- 圆形单选项

```js
  <template>
    <hat-checkbox-group v-model="modelValue">
      <hat-checkbox label="a" round>男</hat-checkbox>
      <hat-checkbox label="b" round>女</hat-checkbox>
    </hat-checkbox-group>
  </template>
  <script>
    export default {
      data() {
        return {
          modelValue: 'a'
        }
      }
    }
  </script>

```
- 单选项目禁止

设置单选项目不可选`disabled`值

```js
  <template>
    <hat-checkbox-group v-model="modelValue">
      <hat-checkbox label="a" round disabled>男</hat-checkbox>
      <hat-checkbox label="b" round>女</hat-checkbox>
    </hat-checkbox-group>
  </template>
  <script>
    export default {
      data() {
        return {
          modelValue: 'a'
        }
      }
    }
  </script>
```

- checkbox支持单个使用

`checkbox`在单个使用，传入布尔值，决定改多选项是否被选中，在`checkbox-group`中传递数组。


```js
<template>
  <div class="button-wrap">
    <hat-checkbox v-model="checked"></hat-checkbox>
    <hat-checkbox v-model="checked1"></hat-checkbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      checked1: true,
    }
  }
}
</script>
```


### checkbox-group

| 字段    | 说明    | 类型 |默认值|
| :------------- |:-------------:| :-----:|:-------:|
| model  | 选择的多选项数组 | Array |[]|


### checkbox

| 字段    | 说明    | 类型 |默认值|
| :------------- |:-------------:| :-----:|:-------:|
| label  | 设置显示checkbox说明文字| String |''|
| round  | 圆形checkbox   |  Boolean |false| 
| disabled  | checkbox是否可选   |  Boolean |false| 
| model  | checkbox可选，在checkbox单个使用时使用   |  Boolean |false| 

<ClientOnly>
  <demo componentName="checkbox" />
</ClientOnly>

