<template>
  <transition name="hat-notify-fade">
    <div v-if="visible" class="hat-notify" :class="`hat-notify-${this.type}`">
      <span class="notify-content">{{message}}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: "hat-notify",
  data() {
    return {
      visible: false,
      type: 'primary'
    };
  },
  methods: {
    close() {
      this.visible = false;
      setTimeout(() => {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el)
      }, 500);
    },
  }
};
</script>
