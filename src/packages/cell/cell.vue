<template>
  <div class="hat-cell-link" :class="cellBorderCls" @click="clickHandle($event)">
    <div class="hat-cell-wrapper" :class="cellContentCls">
      <div class="hat-cell-left-wrapper" v-if="isShowIcon">
        <slot name="left">
          <hat-icon :type="icon" size="24"></hat-icon>
        </slot>
      </div>
      <div class="hat-cell-content-wrapper">
        <span class="hat-cell-title">
          {{title}}
        </span>
        <span class="hat-cell-sub-title" v-if="subTitle">
          {{subTitle}}
        </span>
      </div>
      <div class="hat-cell-right-wrapper">
        <span class="hat-cell-value">{{value}}</span>
        <slot name="right">
          <hat-icon type="arrow-right" size="24"></hat-icon>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../icon/icon.vue'
export default {
  name: 'hat-cell',
  components: {
    Icon
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '主标题'
    },
    subTitle: {
      type: String,
      default: ''
    },
    isShowIcon: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'menu'
    }
  },
  data() {
    return {
      index: 0
    }
  },
  computed: {
    isGroup() {
      return this.$parent.$options._componentTag === 'hat-cell-group'
    },
    cellBorderCls() {
      return {
        'hat-cell-top-border ': !this.isGroup,
        'hat-cell-bottom-border ': !this.isGroup,
        'hat-cell-bodrer-radius': !this.isGroup
      }
    },
    cellContentCls() {
      console.log('****',this.$parent.$children.length)
      return {
        'hat-cell-bottom-border ': this.isGroup && this.index < this.$parent.$children.length,
      }
    }
  },
  methods: {
    clickHandle(e) {
      this.to ? (window.location.href = to) : (this.$emit('click', e))
    }
  }
}
</script>