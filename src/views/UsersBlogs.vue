<template>
    <div class="details">
        <Header2></Header2>
        <div class="user-info">
            <div class="usersTitle">
                <span>头像</span>
                <div class="title">
                    <p>用户名</p>
                </div>
            </div>
            <div class="usersContentWrapper">
                <div class="date">
                    <span>20</span>
                    <span>5月</span>
                    <span>2018</span>
                </div>
                <div class="usersContent">
                    <div>
                        <p>title</p>
                        <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
                    </div>
                </div>

            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Header2 from '@/components/Header2.vue';
    import Footer from '@/components/Footer.vue';
    @Component({
        components: {Footer, Header2}
    })
    export default class UsersBlogs extends Vue {

    }
</script>

<style lang='scss' scoped>
    .user-info{
        min-height: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .usersTitle{
        width: 80%;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #D7D7D7;
        padding: 20px 0;
    }
    .title{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .usersContentWrapper{
        width: 70%;
        margin: 20px 50px;
        display: flex;
        align-items: center;
    }
    .date{
        margin-right: 18px;
        display: flex;
        flex-direction: column;
    }

</style>
