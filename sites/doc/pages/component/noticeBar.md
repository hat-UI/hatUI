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
  <demo componentName="noticebar" />
</ClientOnly>

