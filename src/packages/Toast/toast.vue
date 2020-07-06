<template>
  <div class="toast">
    toast
  </div>
</template>

<script>
export default {
  name: 'hat-toast',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    show() {
      this.visible = true
    },
    hide() {
      this.visible = false
    }
  }
}
</script>
