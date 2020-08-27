### SearchBar搜索栏

### 引入

```js
import Vue from 'vue';
import { SearchBar } from 'hatUI';
Vue.use(SearchBar);
```

### 代码演示

- `SearchBar`支持`round`和`default`两种形状搜索框

```js
  <template>
    <div class="searchbar-wrap">
      <hat-searchbar placeholder="请搜索你所需的商品" round></hat-searchbar>
    </div>
  </template>
```
- `SearchBar`支持是否显示右侧按钮，通过`isShowBtn`属性控制,显示的文案默认为`取消`，通过`actionText`制定按钮文案。

```js
  <template>
    <div class="search-wrap">
      <hat-searchbar placeholder="请搜索你所需的商品" isShowBtn></hat-searchbar>
      <hat-searchbar placeholder="请搜索你所需的商品" isShowBtn actionText="搜索"></hat-searchbar>
    </div>
  </template>

```
- `SearchBar`可以通过`background`设置背景颜色,支持渐变色。

```js
  <template>
    <div>
      <hat-searchbar placeholder="请搜索你所需的商品" background="linear-gradient(to right, #ff6034, #ee0a24)"></hat-searchbar>
    </div>
  </template>
```
- `SearchBar`可以通过`disabled`设置搜索栏不可输入。

```js
  <template>
    <div>
      <hat-searchbar placeholder="请搜索你所需的商品" background="linear-gradient(to right, #ff6034, #ee0a24)" disabled></hat-searchbar>
    </div>
  </template>
```
- `SearchBar`可以通过slot 为`left-btn-section`设置搜索栏左侧搜索栏部分内容, slot为`right-section`定义右侧按钮自定义内容。
```js
  <template>
    <div>
      <hat-searchbar placeholder="请搜索你所需的商品" background="#07c160" round>
        <hat-icon type="upload" slot="left-btn-section"></hat-icon>
      </hat-searchbar>
    </div>
  </template>
```



### Props

| 字段    | 说明    | 类型 |默认值|
| :------------- |:-------------:| :-----:|:-------:|
| background  | 设置searchbar的背景颜色 | String |#ffffff|
| placeholder  | searchbar输入框提示文案   |  String |请输入你的关键词|
| isShowBtn  | searchbar搜索栏是否显示右侧按钮   |  Boolean | false|
| actionText  | searchbar搜索栏右侧按钮文案   |  String | '消失'|
| round  | searchbar搜索栏是否为椭圆   |  Boolean | false|
| disabled  | searchbar搜索栏是否可用   |  Boolean | false|


### Events

| 字段    | 说明    | 类型 |默认值|
| :------------- |:-------------:| :-----:|:-------:|
| rightClick  | 搜索栏右侧按钮点击事件，参数为搜索的关键词| event | null|
| leftClick  | 搜索栏右侧按钮点击事件   |  event |null| 
| keyEnter  | 当搜索栏无右侧搜索栏时，回车事件句柄，参数为搜索的关键词   |  event |null| 
| clear  | 清除事件   |  event | null | 

<ClientOnly>
  <demo componentName="searchbar" />
</ClientOnly>

