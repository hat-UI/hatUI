<template>
  <div class="navbar-wrap">
    <hat-navbar></hat-navbar>
    <br/>
    <hat-navbar title="自定义标题"></hat-navbar>
    <br/>
    <hat-navbar>
      <hat-icon type="menu" slot="right-icon"></hat-icon>
    </hat-navbar>
    <br/>
    <hat-navbar>
      <hat-icon type="search" slot="left-icon"></hat-icon>
      <hat-icon type="menu" slot="right-icon"></hat-icon>
    </hat-navbar>
    <br/>
    <hat-navbar>
      <hat-icon type="upload" slot="left-icon"></hat-icon>
      <hat-icon type="menu" slot="right-icon"></hat-icon>
    </hat-navbar>
    <br/>
    <hat-navbar border></hat-navbar>

  </div>
</template>

<script>
export default {

}
</script>