<template>
  <div class="searchbar-wrap">
    <hat-navbar title="searchbar搜索栏"></hat-navbar>
    <hat-searchbar placeholder="请搜索你所需的商品" isShowBtn actionText="搜索"></hat-searchbar>
    <hat-searchbar placeholder="请搜索你所需的商品"></hat-searchbar>
    <hat-searchbar placeholder="请搜索你所需的商品" round></hat-searchbar>
    <hat-searchbar placeholder="请搜索你所需的商品" round></hat-searchbar>
    <hat-searchbar placeholder="请搜索你所需的商品" isShowBtn></hat-searchbar>
    <hat-searchbar
      placeholder="请搜索你所需的商品"
      background="linear-gradient(to right, #ff6034, #ee0a24)"
      v-model="searchword"
    ></hat-searchbar>
    <hat-searchbar placeholder="请搜索你所需的商品" background="#07c160" round></hat-searchbar>
    <hat-searchbar placeholder="请搜索你所需的商品" background="#07c160" round>
      <hat-icon type="upload" slot="left-btn-section"></hat-icon>
    </hat-searchbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchword: ''
    }
  }
}
</script>