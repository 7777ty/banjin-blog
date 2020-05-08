<template>
    <div class="details">
        <Header2></Header2>
        <div class="users">
            <div class="usersTitle">
                <span>头像</span>
                <div class="title">
                    <p>title</p>
                    <p>用户名 发布于3天前</p>
                </div>
            </div>
            <div class="usersContentWrapper">
                <div>
                    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>

</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Footer from '@/components/Footer.vue';
    import Header2 from '@/components/Header2.vue';
    @Component({
        components: {Header2, Footer, }
    })
    export default class Details extends Vue {

    }
</script>

<style lang='scss' scoped>
    .users{
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
    }
    .title{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .usersContentWrapper{
        width: 70%;
        margin: 20px 50px;
    }
</style>
