<template>
  <div class="tabbar-wrap">
    <hat-navbar title="tabbar标签栏" border></hat-navbar>
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
        'num': 100
      },
      {
        'tabTitle': '分类',
        'curr': false,
        'icon': 'http://img12.360buyimg.com/uba/jfs/t1/25443/23/1062/4600/5c0f3d61E2e9f1360/c9b3421fe18614e2.jpg',
        'activeIcon': 'http://img20.360buyimg.com/uba/jfs/t1/19241/12/1048/8309/5c0f3d61E17ed5a56/c3af0964cade47f8.jpg',
        'href': '###',
      },
      {
        'tabTitle': '发现',
        'curr': false,
        'icon': 'http://img13.360buyimg.com/uba/jfs/t1/10361/35/4713/4643/5c0f3d62E437a3c94/273fd0fb90798f03.jpg',
        'activeIcon': 'http://img14.360buyimg.com/uba/jfs/t1/26604/35/1073/7896/5c0f3d61Eb9f5f184/5f01c938abe4216d.jpg',
        'href': '###',
      },
      {
        'tabTitle': '发现',
        'curr': false,
        'icon': 'http://img13.360buyimg.com/uba/jfs/t1/10361/35/4713/4643/5c0f3d62E437a3c94/273fd0fb90798f03.jpg',
        'activeIcon': 'http://img14.360buyimg.com/uba/jfs/t1/26604/35/1073/7896/5c0f3d61Eb9f5f184/5f01c938abe4216d.jpg',
        'href': '###',
      },
      ]
    }
  }
}
</script>

<style>
</style>