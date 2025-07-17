<template>
    <div class="questions-list-page-wrap">
        <div class="questions-list-page-container">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="日期" width="180" />
                <el-table-column prop="name" label="名字" width="180" />
                <el-table-column prop="address" label="地址" />
            </el-table>
        </div>
    </div>
</template>

<script lang="ts" setup>
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
</script>

<style>
.questions-list-page-wrap {
    width: 100%;
    height: 100%;
    background-color: #f7f7f7;
}
/* .questions-list-page-container {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
.questions-list-page-content {
    height: 100px;
    border: 1px solid #ccc;
    margin: 10px;
    padding: 10px;
} */
</style>