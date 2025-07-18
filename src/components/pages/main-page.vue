<template>
    <div>
        <div>
            <Header></Header>
        </div>
        <div class="main-page-body">
            <div>siderbar</div>
            <div>
                <div>classify</div>
                <div>assignment</div>
            </div>
            <div>statistic</div>
        </div>

        <!-- <div>
            <button @click="showLoginPage = true">显示滑动页面</button>

            <transition name="slide-down">
                <LoginPage v-if="showLoginPage" @close="showLoginPage = false" />
            </transition>
        </div> -->
    </div>
</template>

<script lang="ts" setup>
// import { ref } from 'vue'
import Header from '../common/header-navigation.vue'
// import LoginPage from '../auth/login-page.vue' // 引入 SlidePage 组件

// 状态管理，控制滑动页面的显示
// const showLoginPage = ref(false)
</script>

<style lang="scss" scoped>
.main-page-body {
    display: flex;
    & > * {
        flex: 1;
        text-align: center;
    }
}
</style>
