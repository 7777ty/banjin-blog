<template>
    <div class="create">
        <Header2></Header2>
        <div class="main">
            <div class="title">创建文章</div>
            <div class="articleTitle">
                <p>文章标题</p>
                <el-input v-model="articleTitle" maxlength="20" placeholder="请输入标题" show-word-limit/>
            </div>
            <div class="articleIntroduction">
                <p>文章简介</p>
                <el-input rows="3" resize="none" type="textarea" v-model="articleIntroduction" placeholder="请输入文章简介"/>
            </div>
            <div class="articleContent">
                <p>文章内容</p>
                <el-input rows="12" resize="none" type="textarea" v-model="articleContent" placeholder="请输入文章内容"/>
            </div>
            <div class="buttons">
                <el-button type="success">立即创建</el-button>
                <el-button type="danger"> 取消创建</el-button>
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
    export default class Create extends Vue {
        articleTitle?: string='';
        articleIntroduction?: string='';
        articleContent?: string='';
    }
</script>

<style lang='scss' scoped>
    .title{
        font-size: 20px;
        margin: 20px 0;
    }
    .main{
        margin:0 auto;
        min-height: 500px;
        width:80vw;
    }
    .articleTitle,.articleContent,.articleIntroduction{
        text-align: left;
        margin: 20px 0;
        p{
            margin-bottom: 12px;
        }
    }
    .buttons{
        display: flex;
        justify-content: space-between;
        margin:20px 0;
    }

</style>
