<template>
  <div class="cell-wrap">
    <hat-navbar title="Switch切换" border></hat-navbar>
    <br />
    <div class="cell-wrapper">
      <hat-cell-group circle>
        <hat-cell title="默认switch">
          <hat-switch slot="right"></hat-switch>
        </hat-cell>
        <hat-cell title="禁止点击switch">
          <hat-switch disabled slot="right"></hat-switch>
        </hat-cell>
      </hat-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modelValue: [],
      modelValue1: [],
      modelValue2: [],
      checked: false,
    };
  },
};
</script>
<style scoped lang="scss">
.cell-wrapper {
  width: 95%;
  margin: 0 auto;
}
</style>