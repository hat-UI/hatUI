### Radio单选项

### 引入

```js
import Vue from 'vue';
import { Radio } from 'hatUI';
Vue.use(Radio);
```

### 代码演示

- 单选项支持圆形、方形

单选项支持 `round`、`default`两种种类型，默认为`default`

```js
  <template>
    <hat-radio-group v-model="modelValue">
      <hat-radio label="a">男</hat-radio>
      <hat-radio label="b">女</hat-radio>
    </hat-radio-group>
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
    <hat-radio-group v-model="modelValue">
      <hat-radio label="a" round>男</hat-radio>
      <hat-radio label="b" round>女</hat-radio>
    </hat-radio-group>
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
    <hat-radio-group v-model="modelValue">
      <hat-radio label="a" round disabled>男</hat-radio>
      <hat-radio label="b" round>女</hat-radio>
    </hat-radio-group>
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



### radio-group

| 字段    | 说明    | 类型 |默认值|
| :------------- |:-------------:| :-----:|:-------:|
| model  | 选择的单选项name | String |''|
| circle  | 圆角按钮   |  Boolean |false|


### radio

| 字段    | 说明    | 类型 |默认值|
| :------------- |:-------------:| :-----:|:-------:|
| label  | 设置显示radio说明文字| String |''|
| round  | 圆形radio   |  Boolean |false| 
| disabled  | radio是否可选   |  Boolean |false| 

<ClientOnly>
  <demo componentName="radio" />
</ClientOnly>

