<template>
    <div class="header">
        <h1>共享您的见闻</h1>
        <div class="miniTitle">精品博客汇聚</div>
        <div class="buttons">
            <el-button>立即登录</el-button>
            <el-button>注册帐号</el-button>
        </div>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Header1 extends Vue {

    }
</script>

<style lang='scss' scoped>
    .header{
        height: 300px;
        background: #009933;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
        flex-wrap: wrap;
        flex-direction: column;
    }
    .miniTitle{
        margin-top: 30px;
    }
    .el-button{
        margin-top: 70px;
        color:#009933;
    }
</style>
