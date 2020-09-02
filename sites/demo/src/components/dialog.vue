<template>
  <div class="cell-wrap">
    <hat-navbar title="dialog对话框"></hat-navbar>
    <br />
    <div class="cell-wrapper">
      <hat-cell-group circle>
        <hat-cell icon="heart" title="默认用法" @click="showDialog"></hat-cell>
        <hat-cell icon="heart" title="带content" @click="showContentDialog"></hat-cell>
        <hat-cell icon="heart" title="带确认和取消事件" @click="showEventDialog"></hat-cell>
        <hat-cell icon="heart" title="改变按钮颜色" @click="showColorDialog"></hat-cell>
        <hat-cell icon="heart" title="以标签的方式" @click="showTagDialog"></hat-cell>
        <hat-cell icon="heart" title="定制化内容方式" @click="showSlottDialog"></hat-cell>
      </hat-cell-group>
      <hat-dialog :visible.sync="show" title="标签使用" content="标签使用的方式"></hat-dialog>
      <hat-dialog :visible.sync="showSlot">
        <template slot="dialog-content">
          <hat-icon type="camera"></hat-icon>
          <span class="link">点击选择图片</span>
        </template>
      </hat-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      showSlot: false
    }
  },
  methods: {
    showDialog() {
      this.$dialog({
        title: '确定删除该选项?',
      })
    },
    showContentDialog() {
      this.$dialog({
        title: '确定删除该选项?',
        content: '删除该选项后不可恢复，请慎重！'
      })
    },
    showEventDialog() {
      this.$dialog({
        title: '确定删除该选项?',
        content: '删除该选项后不可恢复，请慎重！',
        cancelBtn(event) {
          alert('你已取消删除')
        },
        confirmBtn(event) {
          alert('你已删除')
        }
      })
    },
    showColorDialog() {
      this.$dialog({
        title: '确定删除该选项?',
        content: '删除该选项后不可恢复，请慎重！',
        confirmBackground: 'linear-gradient(to right, rgb(255, 96, 52), rgb(238, 10, 36))'
      })
    },
    showTagDialog() {
      this.show = true
    },
    showSlottDialog() {
      this.showSlot = true
    }
  }
};
</script>
<style lang="scss">
.cell-wrapper {
  width: 95%;
  margin: 0 auto;
  .link {
    font-size: 14x;
    color: #0000ff;
    margin-top: 20px;
    cursor: pointer;
  }
}
</style>
