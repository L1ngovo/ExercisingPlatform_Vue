<!-- SlidePage.vue -->
<template>
    <div class="login-page-container">
        <div class="login-page-header">
            <div>LOGO</div>
            <div class="login-page-header-title">
                <div @click="close">Home</div>
                <div>Login</div>
            </div>
        </div>
        <div class="login-page-body">
            <div class="login-page-body-form">
                <div class="login-page-body-input">
                    <div>
                        <i class="ri-user-5-line"></i>
                    </div>
                    <input type="text" placeholder="用户名" />
                </div>
                <div>
                    <div>
                        <i class="ri-lock-2-line"></i>
                    </div>
                    <input type="password" placeholder="密码" />
                </div>
                <div>
                    <button>登录</button>
                </div>
            </div>
        </div>
        <div class="login-page-footer">
            <p>Made by Hunter</p>
            <p>Inspire by Shanghai</p>
        </div>
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

<style lang="scss" scoped>
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
    box-sizing: border-box;
    opacity: 0.9;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.login-page-header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;

    & > :first-child {
        font-size: 45px;
        color: #fff;
        flex: 6;
    }
    .login-page-header-title {
        font-size: 32px;
        color: #ccc;
        flex: 1;
        display: flex;
        justify-content: space-around;

        & > :first-child:hover {
            color: blue;
            cursor: pointer;
        }
        & > :last-child {
            position: relative;
            &::after {
                content: '';
                position: absolute;
                left: 50%;
                bottom: -10px;
                width: 80%;
                height: 5px;
                background: #fff;
                transform: translateX(-50%);
            }
        }
    }
}

.login-page-body {
    flex-basis: 30%;
}
.login-page-body-form {
    font-size: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > *:not(:last-child) {
        height: 100%;
        border-bottom: 2px solid #fff;
        display: flex;
        align-items: center;
    }
}

.login-page-footer {
    height: 150px;
    background-color: #1f405a;
    opacity: 0.8;
    font-size: 25px;
    color: #fff;
    text-align: center;
}
</style>