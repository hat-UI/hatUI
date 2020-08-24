<template>
  <div class="notice-bar-wrapper">
    <hat-navbar title="noticebar通知栏"></hat-navbar>
    <hat-noticebar text="这是一条自定义的通知栏"></hat-noticebar>
    <br/>
    <hat-noticebar text="这是一条自定义的通知栏">
      <hat-icon type="search" slot="icon" size="20"></hat-icon>
    </hat-noticebar>
    <br/>
    <hat-noticebar text="这是一条自定义的通知栏" color="#1989fa" backgroundColor="#ecf9ff"></hat-noticebar>
    <br/>
    <hat-noticebar text="这是一条自定义的通知栏" :speed="50"></hat-noticebar>
    <br/>
    <hat-noticebar text="这是一条自定义的通知栏" :speed="50" :delay="2"></hat-noticebar>
    <br/>
    <hat-noticebar :speed="50">这是一条自定义的通知栏</hat-noticebar>
  </div>
</template>

<script>
export default {

}
</script>
