<template>
    <div class="switch-wrap">
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
    justify-content: center;
    align-items: center;
}
</style>