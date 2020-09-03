<template>
  <button
    aria-role="button"
    :style="styleCls"
    @click="clickHandler"
    :class="cls"
    :disabled="disabled"
  >
    <hat-icon v-if="icon !== ''" :type="icon"></hat-icon>
    <div class="hat-button-content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from '@/icon/icon.vue';

export default {
  name: 'hat-button',
  components: {
    'hat-icon': Icon
  },
  props: {
    size: {
      type: String,
      default: 'small'
    },
    plain: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {};
  },
  methods: {
    clickHandler () {
      this.$emit('click');
    }
  },
  computed: {
    cls () {
      let className = `hat-button hat-button-${this.type} hat-button-${this.size}`;
      this.circle && (className += ' hat-button-circle');
      this.round && (className += ' hat-button-round');
      this.disabled && (className += ' disabled');
      this.plain && (className += ' hat-button-plain');
      return className;
    },
    styleCls () {
      const styleObj = [];
      this.color
        && styleObj.push({
          background: this.color,
          color: '#fff',
          border: 'none'
        });
      this.block && styleObj.push({
        display: 'block',
        width: '100%'
      });
      return styleObj;
    }
  }
};
</script>
