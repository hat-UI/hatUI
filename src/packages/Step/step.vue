<template>
  <div class="hat-step-bar-wrapper">
    <div class="hat-step-bar" v-if="!isFirst" :class="[ active? 'hat-step-bar-active': 'normal']"></div>
    <div class="hat-step-content-wrapper">
      <div class="slot-text" :class="[ active? 'hat-step-font-active': '']">
        <slot></slot>
      </div>
      <hat-icon type="success" :class="[ active? 'hat-step-font-active': '']" class="icon" round></hat-icon>
    </div>
  </div>
</template>

<script>
import icon from '../icon/icon.vue';

export default {
  name: 'hat-step',
  components: {
    'hat-icon': icon
  },
  data () {
    return {
      index: 0,
      direction: 'horizontal'
    };
  },
  computed: {
    isFirst () {
      const parent = this.$parent;
      return parent.steps[0] === this;
    },
    active () {
      return this.$parent.active >= this.index;
    }
  },
  beforeCreate () {
    this.$parent.steps.push(this);
  }
};
</script>
