<template>
  <div class="cell-wrap">
    <hat-navbar title="loading加载"></hat-navbar>
    <br />
    <div class="cell-wrapper">
      <hat-cell-group circle>
        <hat-cell title="Loading加载">
          <hat-loading :show="true" slot="right" color="#07c160"></hat-loading>
        </hat-cell>
        <hat-cell title="红色loading">
          <hat-loading :show="true" slot="right" color="#f00"></hat-loading>
        </hat-cell>
        <hat-cell title="蓝色loading">
          <hat-loading :show="true" slot="right" color="#00f"></hat-loading>
        </hat-cell>
        <hat-cell title="蓝色loading">
          <hat-loading :show="true" slot="right" color="#00f"></hat-loading>
        </hat-cell>
        <hat-cell title="不同size的loading">
          <hat-loading :show="true" slot="right" color="#00f" :size="100"></hat-loading>
        </hat-cell>
        <hat-cell title="不同size的loading">
          <hat-loading :show="true" slot="right" color="#f00" :size="100"></hat-loading>
        </hat-cell>
        <hat-cell title="不同size的loading">
          <hat-loading :show="true" slot="right" color="#000" :size="100"></hat-loading>
        </hat-cell>
        <hat-cell title="不同size的loading">
          <hat-loading :show="true" slot="right" color="#000" :size="100">加载中</hat-loading>
        </hat-cell>
      </hat-cell-group>
    </div>
  </div>
</template>

<script>
export default {
};
</script>
<style lang="scss">
.cell-wrapper {
  width: 95%;
  margin: 0 auto;
}
</style>


