<template>
  <transition name="hat-notify-fade">
    <div v-if="visible" class="hat-notify" :class="`hat-notify-${this.type}`">
      <span class="notify-content">{{message}}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'hat-notify',
  data () {
    return {
      visible: false,
      message: '',
      duration: 1500,
      type: 'primary'
    };
  },
  methods: {
    setTimer () {
      setTimeout(() => {
        this.close();
      }, this.duration);
    },
    close () {
      this.visible = false;
      setTimeout(() => {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }, 500);
    }
  },
  mounted () {
    this.setTimer();
  }
};
</script>
