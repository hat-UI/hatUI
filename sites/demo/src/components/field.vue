<template>
  <div class="cell-wrap">
    <hat-navbar title="field文本框"></hat-navbar>
    <br />
    <hat-field v-model="message" label="用户名"></hat-field>
    <hat-field v-model="message" type="password" label="密   码"></hat-field>
    <hat-field v-model="message" type="password">
      <template slot="left-btn-section">
        <hat-icon type="camera" size="20"></hat-icon>
        <span>自定义</span>
      </template>
    </hat-field>
    <hat-field v-model="message" type="password" label="密   码" round></hat-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "普通用法",
    };
  },
};
</script>

<style>
</style>