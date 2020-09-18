<template>
  <div class="hat-step-bar-wrapper" :class="[direction === 'horizontal'? 'is-vertical': 'is-horizontal']">
    <div class="hat-step-bar" :class="[ active? 'hat-step-bar-active': 'normal', '']"></div>
    <div class="slot-text" :class="[ active? 'hat-step-font-active': '']">
      <slot></slot>
    </div>
    <hat-icon type="success" :class="[ active? 'hat-step-font-active': '']" class="icon" round></hat-icon>
  </div>
</template>

<script>
import icon from '../icon/icon.vue';

export default {
  name: 'hat-step',
  components: {
    'hat-icon': icon
  },
  data() {
    return {
      index: 0,
      direction: ''
    };
  },
  computed: {
    isFirst() {
      const parent = this.$parent;
      return parent.steps[0] === this;
    },
    active() {
      return this.$parent.active >= this.index;
    }
  },
  beforeCreate() {
    this.$parent.steps.push(this);
  }
};
</script>
