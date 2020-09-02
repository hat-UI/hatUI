### Dialog对话框

### 引入

```js
import Vue from 'vue';
import { Dialog } from 'hatUI';
Vue.use(Dialog);
```

### 以方法的形式调用`dialog`对话框
 
- 默认对话框的属性为`title`和`content`，设置对话框的内容和标题

```html
<template>
 <hat-cell-group circle>
  <hat-cell icon="heart" title="默认用法" @click="showDialog"></hat-cell>
  </hat-cell-group>
</template>
<script>
export default {
  methods: {
    showDialog() {
      this.$dialog({
        title: '确定删除该选项?',
        content: '删除该选项后不可恢复，请慎重！'
      })
    },
  },
};
</script>
```
- 设置点击回调函数，默认左侧按钮文案为"取消"，右侧为"确认"。可通过`cancelText`和`confirmText`设置自定义文案。事件`cancelBtn`和`confirmBtn`分别代表点击确认和取消按钮的回调事件。

```vue
<template>
  <hat-cell-group circle>
      <hat-cell icon="heart" title="带确认和取消事件" @click="showEventDialog"></hat-cell>
  </hat-cell-group>
</template>
<script>
export default {
  methods: {
    showEventDialog() {
      this.$dialog({
        title: '确定删除该选项?',
        content: '删除该选项后不可恢复，请慎重！',
        cancelText: '取消',
        cofirmText: '确定',
        cancelBtn(event) {
          alert('你已取消删除')
        },
        confirmBtn(event) {
          alert('你已删除')
        }
      })
    }
  },
};
</script>
```
- 改变按钮和文案的颜色值

```html
<template>
  <hat-cell-group circle>
    <hat-cell icon="heart" title="改变按钮颜色" @click="showColorDialog"></hat-cell>
  </hat-cell-group>
</template>
<script>
export default {
  methods: {
    showColorDialog() {
      this.$dialog({
        title: '确定删除该选项?',
        content: '删除该选项后不可恢复，请慎重！',
        confirmBackground: 'linear-gradient(to right, rgb(255, 96, 52), rgb(238, 10, 36))'
      })
    },
  },
};
</script>
```
### 以`Dialog`标签的方式调用对话框

- 标签默认使用方法


```html
<template>
  <div class="cell-wrapper">
      <hat-cell-group circle>
        <hat-cell icon="heart" title="以标签的方式" @click="showTagDialog"></hat-cell>
        <hat-cell icon="heart" title="定制化内容方式" @click="showSlottDialog"></hat-cell>
      </hat-cell-group>
      <hat-dialog :visible.sync="show" title="标签使用" content="标签使用的方式"></hat-dialog>
      <hat-dialog :visible.sync="showSlot">
        <template slot="dialog-content">
          <hat-icon type="camera"></hat-icon>
          <span class="link">点击选择图片</span>
        </template>
      </hat-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      showSlot: false
    }
  },
  methods: {
    showTagDialog() {
      this.show = true
    },
    showSlottDialog() {
      this.showSlot = true
    }
  }
};
</script>
```


### props

| 字段    | 说明    | 类型 |默认值|
| ------------- |:-------------:| -----|-------|
| visible  | 以标签形式调用时，设置对话框的显示和隐藏 | Boolean |false|
| title  | 以方法或者标签方式调用时，指定对话框的标签   |  String |null|
| content | 以方法或者标签方式调用时，指定对话框的内容   | String| null|
|cancelText|对话框的取消按钮的文案|String|取消|
|confirmText|对话框的确认按钮的文案|String|确定|
|cancelBackground|对话框的取消按钮的背景颜色|String|#ffffff|
|confirmBackground|对话框的确认按钮的背景颜色|String|#07c160|
|confirmColor|对话框的确认按钮的颜色|String|#ffffff|
|cancelColor|对话框的取消按钮的颜色|String|#000000|
|confirmBtn|对话框的确定按钮触发的回调函数，仅在方法调用中传递|Function|null|
|cancelBtn|对话框的取消按钮触发的回调函数，仅在方法调用中传递|Function|null|
|closeBtn|对话框的关闭按钮触发的回调函数，仅在方法调用中传递|Function|null|
|isShowClose|是否显示关闭对话框的按钮|Boolean|false|


### Slot
| 字段    | 说明    | 类型 |默认值|
| ------------- |:-------------:| -----|-------|
| dialog-content  |自定义设置dialog对话框的内容 |any|null|
| dialog-footer  | 自定义设置dialog对话框的按钮组内容   |  any | null |

<ClientOnly>
  <demo componentName="dialog" />
</ClientOnly>

