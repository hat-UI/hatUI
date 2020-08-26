<template>
  <div class="hat-tabbar-wrapper" :style="tabbarStyle">
    <div
      class="hat-tabbar-item"
      v-for="(item,index) in tabList"
      :key="item.name"
      @click="switchTab(item,index)"
    >
      <div class="hat-tabbar-icon">
        <hat-badge :isDot="item.isDot" :value="!item.isDot && item.num">
          <img
            :src="item.curr? item.activeIcon: item.icon"
            class="hat-tabbar-custom-image"
            v-if="isNetWorkImage(item.icon)"
          />
          <hat-icon :type="item.icon" :style="{color: item.curr? activeColor: color}" v-else></hat-icon>
        </hat-badge>
      </div>
      <span
        class="hat-tabbar-label"
        :style="{color: item.curr? activeColor: color}"
      >{{item.tabTitle}}</span>
    </div>
  </div>
</template>

<script>
import Badge from '../badge/badge.vue'
export default {
  name: 'hat-tabbar',
  components: {
    Badge
  },
  props: {
    tabList: {
      type: Array,
      defualt: []
    },
    bottom: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: '#000',
    },
    activeColor: {
      type: String,
      default: '#f0250f'
    }
  },
  methods: {
    switchTab(item, index) {
      this.tabList.forEach((item, currIndex) => {
        index === currIndex ? (item.curr = true) : (item.curr = false)
      })
      window.location.href = item.href
      this.$emit('switchTab', item, index)
    },
    isNetWorkImage(url) {
      if (/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(url)) {
        return true
      }
      return false
    }
  },
  computed: {
    tabbarStyle() {
      return {
        'position': this.fixed ? 'fixed' : 'relative',
        'bottom': this.bottom ? 0 : ''
      }
    }
  }
}
</script>