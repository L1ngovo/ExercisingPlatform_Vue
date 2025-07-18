<template>
    <div class="common-layout">
        <!-- <router-view></router-view> -->
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped>
.common-layout {
    padding: 0;
    margin: 0;
    height: 100%;
}
</style>