<template>
  <hat-popup :show="show" @closed="closeActionSheet" :circle="true">
    <div class="hat-actionsheet-wrapper">
      <slot name="header">
        <div class="hat-actionsheet-default-header">
          <div class="hat-actionsheet-title">标题</div>
          <hat-icon type="fail" class="hat-actionsheet-closed" @click.native="closeActionSheet"></hat-icon>
        </div>
      </slot>
      <div class="hat-acitonsheet-list">
        <div class="hat-actionsheet-list-item" v-for="(item,index) in actions" :key="index">
          <div class="hat-actionsheet-list-title">{{item.name}}</div>
          <div class="hat-actionsheet-list-subtitle">12121</div>
        </div>
      </div>
      <div class="hat-actionsheet-gap"></div>
      <div class="hat-actionsheet-cancel-btn" @click="closeActionSheet">取消</div>
    </div>
  </hat-popup>
</template>

<script>
import popup from "../popup/index.js";
import icon from '../icon/index.js';
export default {
  name: "hat-actionsheet",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    actions: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    popup,
    icon
  },
  methods: {
    closeActionSheet() {
      this.$emit("closed");
    },
  },
};
</script>

<style>
</style>