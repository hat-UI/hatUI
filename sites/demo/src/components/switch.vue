<template>
    <div class="switch-wrap">
        <hat-navbar title="switch切换" border></hat-navbar>
        <hat-switch>默认switch</hat-switch>
        <hat-switch disabled>禁止点击switch</hat-switch>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
.switch-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>