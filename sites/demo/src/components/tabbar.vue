<template>
  <div class="tabbar-wrap">
    <hat-navbar title="tabbar标签栏" border></hat-navbar>
    <hat-tabbar :tabList="tabList" :bottom="false"></hat-tabbar>
    <hat-tabbar :tabList="tabList" :bottom="false"></hat-tabbar>
    <hat-tabbar :tabList="tabList" bottom></hat-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList: [{
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

<style>
</style>