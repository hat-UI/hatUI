<template>
  <div class="hat-tabbar-wrapper">
    <div class="hat-tabbar-item" v-for="item in tabList" :key="item.name">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'hat-tabbar',
  props: {
    tabList: {
      type: Array,
      defualt: []
    },
    fixed: {
      type: Boolean,
      default: true
    },
    bottom: {
      type: [String|Number],
      default: 0
    }
  }
}
</script>