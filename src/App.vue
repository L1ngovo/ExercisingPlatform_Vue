<template>
    <div class="common-layout">
        <el-container>
            <el-header v-if="$route.path !== '/'">
                <HeaderNavigation />
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import HeaderNavigation from './components/common/header-navigation.vue'
</script>

<style scoped>
.common-layout,
:deep(.el-container),
:deep(.el-main) {
    padding: 0;
    margin: 0;
    height: 100%;
}
:deep(.el-header) {
    margin: 0;
    padding: 0;
}
</style>