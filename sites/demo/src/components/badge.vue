<template>
  <div class="badge-wrapper">
    <hat-navbar title="badge徽标"></hat-navbar>
    <hat-badge isDot></hat-badge>
    <hat-badge :value="34"></hat-badge>
    <hat-badge :value="11" :max="10"></hat-badge>
    <hat-badge :value="11" :max="10" :zIndex="10"></hat-badge>
    <hat-badge color="#0f0" :value="10" icon="camera" icon-color="#000"></hat-badge>
  </div>
</template>