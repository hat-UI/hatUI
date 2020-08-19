<template>
  <div class="hat-tabs-wrapper">
    <div class="hat-tabs-nav">
      <span class="hat-tabs-bar"></span>
      <div
        class="hat-tabs-nav-item"
        v-for="(item,index) in navList"
        :key="index"
        @click="selectTab(item,index)"
      >{{item.label}}</div>
    </div>
    <div class="hat-tabs-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'hat-tabs',
  provide() {
    return { TabsInstance: this }
  },
  props: {
    value: {
      type: String | Number,
      defualt: 0
    },
  },
  data() {
    return {
      navList: [],
      activeKey: this.value
    }
  },
  methods: {
    getTabsPanel() {
      const tabsItem = this.$children.filter(item => item.$options._componentTag === "hat-tabpanel")
      tabsItem.forEach((item, index) => {
        this.navList.push({
          label: item.label,
          name: item.name || index
        })
        if (index === 0 && !this.activeKey) {
          this.activeKey = item.name
        }
      })
    },
    selectTab(item, index) {
      this.activeKey = item.name || index
    }
  },
  mounted() {
    this.getTabsPanel()
  },

}
</script>