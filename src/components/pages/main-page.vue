<template>
    <div>
        <!-- 按钮，点击后改变显示状态 -->
        <button @click="showLoginPage = true">显示滑动页面</button>

        <!-- 过渡效果 -->
        <transition name="slide-down">
            <!-- 滑动页面，根据 showSlidePage 的值显示或隐藏 -->
            <LoginPage v-if="showLoginPage" @close="showLoginPage = false" />
        </transition>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import LoginPage from '../auth/login-page.vue' // 引入 SlidePage 组件

// 状态管理，控制滑动页面的显示
const showLoginPage = ref(false)
</script>

<style scoped>
/* 过渡效果的 CSS */
/* .slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.5s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}
.slide-down-enter-to,
.slide-down-leave-from {
    transform: translateY(0);
    opacity: 1;
} */
</style>
