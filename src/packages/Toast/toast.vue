<template>
  <div class="hat-toast" v-show="visible" :class="showAnimation ? 'fadein' : 'fadeout'">
    <span v-html="text"></span>
  </div>
</template>

<script>
export default {
  name: 'hat-toast',
  data() {
    return {
      visible: false,
      showAnimation: false,
      text: '',
    };
  },
  methods: {
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    },
  },
};
</script>
