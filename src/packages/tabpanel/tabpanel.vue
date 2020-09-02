<template>
  <transition name="slide-fade">
    <div class="hat-tabpanel-wrapper" v-show="show">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'hat-tabpanel',
  inject: ['TabsInstance'],
  props: {
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    show () {
      return this.$parent.activeKey === this.name;
    }
  }
};
</script>
