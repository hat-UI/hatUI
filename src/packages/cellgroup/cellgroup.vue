<template>
  <div class="hat-cell-group-wrapper" :style="boderStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'hat-cell-group',
  props: {
    circle: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    childLength (newVal) {
      if (newVal) {
        this.setChildrenIndex();
      }
    }
  },
  computed: {
    childLength () {
      return this.$children;
    },
    boderStyle () {
      return {
        'border-radius': this.circle ? '8px' : '0'
      };
    }
  },
  methods: {
    setChildrenIndex () {
      const children = this.childLength;
      children.forEach((child, index) => {
        child.index = index;
      });
    }
  },
  mounted () {
    this.setChildrenIndex();
  }
};
</script>
