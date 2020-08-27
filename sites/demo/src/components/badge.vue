<template>
  <div class="cell-wrap">
    <hat-navbar title="badge徽标"></hat-navbar>
    <br/>
    <div class="cell-wrapper">
      <hat-cell-group circle>
        <hat-cell title="圆点徽标" isShowIcon>
          <hat-badge isDot slot="left"></hat-badge>
        </hat-cell>
        <hat-cell title="设置徽标数值" isShowIcon>
          <hat-badge :value="34" slot="left"></hat-badge>
        </hat-cell>
        <hat-cell title="设置徽标最大值" isShowIcon>
          <hat-badge :value="11" :max="10" slot="left"></hat-badge>
        </hat-cell>
        <hat-cell title="设置徽标层级" isShowIcon>
          <hat-badge :value="11" :max="10" :zIndex="10" slot="left"></hat-badge>
        </hat-cell>
        <hat-cell title="更改图标和颜色" isShowIcon>
          <hat-badge color="#0f0" :value="10" icon="camera" icon-color="#000" slot="left"></hat-badge>
        </hat-cell>
        <hat-cell title="文本徽标" isShowIcon>
          <hat-badge color="#0f0" :value="10" slot="left">文本</hat-badge>
        </hat-cell>
        <hat-cell title="更改颜色文本徽标" isShowIcon>
          <hat-badge :value="10" slot="left">文本</hat-badge>
        </hat-cell>
        <hat-cell title="圆点文本徽标" isShowIcon>
          <hat-badge isDot slot="left">文本</hat-badge>
        </hat-cell>
      </hat-cell-group>
    </div>
  </div>
</template>
<style scoped lang="scss">
.cell-wrapper {
  width: 95%;
  margin: 0 auto;
}
</style>