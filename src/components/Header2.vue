<template>
    <div class="header">
            <h1>踢歪博客</h1>
            <div class="userWrapper">
                <router-link to="/edit"><i class="el-icon-edit"></i></router-link>
                <span><img :alt="$store.state.user.username" class="avatar" :src="$store.state.user.avatar"></span>
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
        font-size: 30px;
    }
    .userWrapper{
        display: flex;
        align-items: center;
    }
    .avatar {
        width: 40px;
        height: 40px;
        border: 1px solid #fff;
        border-radius: 50%;
        margin-left: 15px;
    }

</style>
