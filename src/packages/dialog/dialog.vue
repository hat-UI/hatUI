<template>
  <hat-popup :show="visible" position="center" :isCanClose="false">
    <div class="hat-dialog-wrapper">
      123123132
    </div>
  </hat-popup>
</template>

<script>
import popup from '../popup/popup.vue'
export default {
  name: "hat-dailog",
  components: {
    popup
  },
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
