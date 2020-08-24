<template>
  <div class="icon-wrapper">
    <hat-navbar title="Icon图标" border></hat-navbar>
    <div class="icon-section-wrapper">
      <div class="section">
        <hat-icon type="camera"></hat-icon>
        <span class="class-name">camera</span>
      </div>
      <div class="section">
        <hat-icon type="add"></hat-icon>
        <span class="class-name">add</span>
      </div>
      <div class="section">
        <hat-icon type="close"></hat-icon>
        <span class="class-name">close</span>
      </div>
      <div class="section">
        <hat-icon type="double-arrow-right"></hat-icon>
        <span class="class-name">double-arrow-right</span>
      </div>
      <div class="section">
        <hat-icon type="double-arrow-left"></hat-icon>
        <span class="class-name">double-arrow-left</span>
      </div>
      <div class="section">
        <hat-icon type="arrow-left"></hat-icon>
        <span class="class-name">arrow-left</span>
      </div>
      <div class="section">
        <hat-icon type="arrow-right"></hat-icon>
        <span class="class-name">arrow-right</span>
      </div>
      <div class="section">
        <hat-icon type="heart"></hat-icon>
        <span class="class-name">heart</span>
      </div>
      <div class="section">
        <hat-icon type="success"></hat-icon>
        <span class="class-name">success</span>
      </div>
      <div class="section">
        <hat-icon type="menu"></hat-icon>
        <span class="class-name">menu</span>
      </div>
      <div class="section">
        <hat-icon type="scan"></hat-icon>
        <span class="class-name">scan</span>
      </div>
      <div class="section">
        <hat-icon type="member"></hat-icon>
        <span class="class-name">member</span>
      </div>
      <div class="section">
        <hat-icon type="filter"></hat-icon>
        <span class="class-name">filter</span>
      </div>
      <div class="section">
        <hat-icon type="delete"></hat-icon>
        <span class="class-name">delete</span>
      </div>
      <div class="section">
        <hat-icon type="upload"></hat-icon>
        <span class="class-name">upload</span>
      </div>
      <div class="section">
        <hat-icon type="fail"></hat-icon>
        <span class="class-name">fail</span>
      </div>
      <div class="section">
        <hat-icon type="phone"></hat-icon>
        <span class="class-name">phone</span>
      </div>
      <div class="section">
        <hat-icon type="data"></hat-icon>
        <span class="class-name">data</span>
      </div>
      <div class="section">
        <hat-icon type="refresh"></hat-icon>
        <span class="class-name">refresh</span>
      </div>
      <div class="section">
        <hat-icon type="search"></hat-icon>
        <span class="class-name">search</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.icon-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 15px 0;
  border-radius: 12px;
  .icon-section-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 10px;
    background-color: #ffffff;
    .section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 12px;
      flex: 0 0 25%;
      margin: 5px 0;
      .class-name {
        margin-top: 10px;
      }
    }
  }
}
</style>