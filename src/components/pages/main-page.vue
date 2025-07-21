<template>
    <div class="main-page-container">
        <div class="main-page-header">
            <Header></Header>
        </div>
        <div class="main-page-body">
            <div class="main-page-body-left">siderbar</div>
            <div class="main-page-body-center">
                <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                    <el-tab-pane label="User" name="first">User</el-tab-pane>
                    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
                    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
                    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
                </el-tabs>
            </div>
            <div class="main-page-body-right">statistic</div>
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
.main-page-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.main-page-body {
    flex-grow: 1;
    overflow: auto;
    display: flex;
    & > * {
        text-align: center;
    }
    .main-page-body-left,
    .main-page-body-right {
        flex: 1;
    }
    .main-page-body-left {
        border-right: 1px solid #e6e6e6;
    }
    .main-page-body-center {
        flex: 3;
        padding: 20px;
    }
    .main-page-body-right {
        border: 1px solid #e6e6e6;
        margin: 0px 5px;
        box-shadow: 6px 3px 10px #e6e6e6;
    }
}

// 去掉长下划线
:deep(.el-tabs__nav-wrap::after) {
    position: static !important;
}
// 修改短线颜色
:deep(.el-tabs__active-bar) {
    background-color: #01847f;
}
// 修改title颜色
:deep(.el-tabs__item) {
    color: #479794;
}
:deep(.el-tabs__item.is-active) {
    color: #00524f;
}
:deep(.el-tab-pane) {
    padding: 10px;
    border-top: 1px solid #e6e6e6;
}
</style>


