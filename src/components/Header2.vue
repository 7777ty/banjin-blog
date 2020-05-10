<template>
    <div class="header">
            <router-link to="/"><h1>板筋博客</h1></router-link>
            <div class="userWrapper">
                <router-link to="/create"><i class="el-icon-edit"></i></router-link>
                <div class="user">
                    <img class="avatar" :src="this.avatar" :alt="this.title" :title="this.username">
                    <ul>
                        <li><router-link to="/my-blogs">我的</router-link></li>
                        <li><a href="#" @click="onLogout">注销</a></li>
                    </ul>
                </div>
            </div>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import auth from '@/api/auth';

    @Component
    export default class Header2 extends Vue {
        avatar='';
        title='';
        username='';
        onLogout(){
            this.$store.dispatch('logout');
            this.$router.push('/login')
        }
        created(){
            this.$store.dispatch('checkLogin');
            auth.getInfo().then(res=>{
                this.avatar=res.data.avatar;
                this.title=res.data.title;
                this.username=res.data.username
            });

        }
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
    .user {
        position: relative;

        ul {
            display: none;
            position: absolute;
            right: 0;
            list-style: none;
            border: 1px solid #eaeaea;
            margin:0;
            padding: 0;
            background-color: #fff;

            a {
                text-decoration: none;
                color: #333;
                font-size: 12px;
                display: block;
                padding: 5px 10px;

                &:hover {
                    background-color: #eaeaea;
                }
            }

        }

        &:hover ul {
            display: block;
        }
    }
</style>
