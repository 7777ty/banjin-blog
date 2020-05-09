<template>
    <div class="signUp">
        <Header1></Header1>
        <div class="username">
            <p>用户名</p>
            <el-input v-model="username" maxlength="10" placeholder="用户名" clearable></el-input>

        </div>
        <div class="password">
            <p>密码</p>
            <el-input v-model="password" show-password maxlength="20" placeholder="密码" clearable></el-input>
        </div>
        <el-button @click="toSignUp(username,password)">立即注册</el-button>
        <div class="tips">已有帐号？<router-link to="/login" style="color:#009933 ">立即登录</router-link></div>
        <Footer></Footer>
    </div>

</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Header1 from '@/components/Header1.vue';
    import Footer from '@/components/Footer.vue';

    @Component({
        components: {Footer, Header1}
    })
    export default class SignUp extends Vue {
        username?: string='';
        password?: string='';
        toSignUp(username: string,password: string){
            this.$store.dispatch('signUp',{username,password}).then(()=>{
                this.$router.push('login')
            });
        }
    }
</script>

<style lang='scss' scoped>
    .username{
        width:50%;
        margin:20px auto;
        margin-top: 80px;
    }
    .password{
        width:50%;
        margin: 20px auto;
    }
    .tips{
        margin: 30px 0;
    }
    div >p{
        margin-bottom: 10px;
    }

</style>
