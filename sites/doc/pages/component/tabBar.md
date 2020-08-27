### TabBar标签栏

### 引入

```js
import Vue from 'vue';
import { TabBar } from 'hatUI';
Vue.use(TabBar);
```

### 代码演示

- `TabBar`通过传入`TabList`数组传递`tab`子项目。

```js
  <template>
    <hat-tabbar :tabList="tabList" bottom></hat-tabbar>
  </template>
  <script>
    export default {
      data() {
        return {
          tabList: [
            {
              'tabTitle': '主页',
              'curr': true,
              'icon': 'upload',
              'href': '###',
              'isDot': true
            },
            {
              'tabTitle': '分类',
              'curr': false,
              'icon': 'camera',
              'href': '###',
              'num': 99
            },
            {
              'tabTitle': '发现',
              'curr': false,
              'icon': 'add',
              'href': '###',
            },
            {
              'tabTitle': '发现',
              'curr': false,
              'icon': 'filter',
              'href': '###',
              'color': '#dddddd'
            },
          ]
        }
      }
    }
  </script>
```
- 自定义`tab`子项目激活与未激活状态的颜色状态，`color`定义未激活状态颜色,`activeColor`定义激活状态颜色。

```js
  <template>
    <hat-tabbar :tabList="tabList" bottom :color="color" :activeColor="activeColor"></hat-tabbar>
  </template>
  <script>
    export default {
      data() {
        return {
          activeColor: '#ff0000',
          color: '#dddddd',
          tabList: [
            {
              'tabTitle': '主页',
              'curr': true,
              'icon': 'upload',
              'href': '###',
              'isDot': true
            },
            {
              'tabTitle': '分类',
              'curr': false,
              'icon': 'camera',
              'href': '###',
              'num': 99
            },
            {
              'tabTitle': '发现',
              'curr': false,
              'icon': 'add',
              'href': '###',
            },
          ]
        }
      }
    }
  </script>
```
- 定义`TabBar`位置，默认情况下`TabBar`位置为`fixed`,并且居于底部。设置`fixed`为false，则按普通文档流布局排列
```js
  <template>
     <hat-tabbar :tabList="tabList" :fixed="false"></hat-tabbar>
  </template>
```
- `TabBar`支持组件库自带图标或者网络图片定义的图标,激活`tab``标签卡可以绑定switchTab事件，参数为激活项的值和索引值。

```js
  <template>
    <div class="tabbar-wrap">
      <hat-tabbar :tabList="tabList" bottom :color="color" :activeColor="activeColor" @switchTab="switchTab"></hat-tabbar>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          tabList: [{
            'tabTitle': '主页',
            'curr': true,
            'icon': 'http://XXXX.jpg',
            'activeIcon': 'http://xxxx.jpg',
            'href': '###',
            'isDot': true
          }]
        }
      },
      methods: {
        switchTab(value,index) {
          console.log(value,index)
        }
      }
    }
  </script>
```

### Props

| 字段    | 说明    | 类型 |默认值|
| :------------- |:-------------:| :-----:|:-------:|
| tabList  | 设置标签栏的数组子项目| Array |[]|
| bottom  | 设置标签栏离底部的距离   |  Number |0| 
| fixed  | 设置标签栏是否为固定定位   |  Boolean |true| 
| color  | 标签栏子标签未激活时的颜色 |  String |'#000000'| 
| activeColor  | 标签栏子标签激活时的颜色  |  String |'#f0250f'| 


### TabList具体参数
| 字段    | 说明    | 类型 |默认值|
| :------------- |:-------------:| :-----:|:-------:|
| tabTitle  | 子标签文案| String |''|
| curr  | 当前标签是否激活   |  Boolean | false| 
| icon  | 当前子标签的图标，如果icon设置为组件自带图标，可不设置activeIcon   |  String | ''| 
| activeIcon  | 当前子标签激活时的图标，如果icon设置为组件自带图标，可不设置activeIcon   |  String | ''| 
| href  | 当前子标签激活时,切换的链接地址 |  String | ''| 
| isDot  | 当前子标签带有警示或提示信息,设置圆点徽标 |  Boolean | false| 
| num  | 当前子标签带有警示或提示信息,设置数字徽标，设置isDot时，不生效。反之一样效果 |  Boolean | false| 

<ClientOnly>
  <demo componentName="tabbar" />
</ClientOnly>

