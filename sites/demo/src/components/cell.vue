<template>
  <div class="cell-wrap">
    <hat-navbar title="cell列表项"></hat-navbar>
    <br/>
    <div class="cell-wrapper">
      <hat-cell-group circle>
        <hat-cell></hat-cell>
        <hat-cell></hat-cell>
        <hat-cell></hat-cell>
        <hat-cell></hat-cell>
      </hat-cell-group>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss">
.cell-wrapper {
  width: 90%;
  margin: 0 auto;
}
</style>