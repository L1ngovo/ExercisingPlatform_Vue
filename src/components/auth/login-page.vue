<!-- SlidePage.vue -->
<template>
    <div class="login-page-container">
        <div>logo</div>
        <div class="login-page-form">
            <input type="text" placeholder="用户名" />
            <input type="password" placeholder="密码" />
            <button>登录</button>
        </div>
        <!-- 关闭按钮 -->
        <button @click="close">关闭</button>
    </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'

// 定义一个 emit 函数，用于触发关闭事件
const emit = defineEmits(['close'])

// 关闭函数，触发 close 事件
const close = () => {
    emit('close')
}
</script>

<style scoped>
/* 过渡效果的 CSS */
.slide-down-enter-active,
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
}

/* 滑动页面的样式 */
.login-page-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../../assets/images/login-bg.jpg') center/cover no-repeat;
    padding: 20px;
    box-sizing: border-box;
    opacity: 0.9;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.login-page-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>