<template>
    <div class="header">
            <h1>踢歪博客</h1>
            <div>
                <span><i class="el-icon-edit"></i></span>
                <span>头像</span>
            </div>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Header2 extends Vue {

    }
</script>

<style lang='scss' scoped>
    .header{
        height: 70px;
        background: #009933;
        display: flex;
        align-items: center;
        color: #FFFFFF;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 40px;
    }
    .el-icon-edit{
        margin-right: 20px;
    }


</style>
