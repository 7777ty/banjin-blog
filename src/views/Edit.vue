<template>
    <div class="edit">
        <Header2></Header2>
        <div class="main">
            <div class="title">创建文章</div>
            <div class="articleTitle">
                <p>文章标题</p>
                <el-input v-model="blogDetails.title" maxlength="20" placeholder="请输入标题" show-word-limit/>
            </div>
            <div class="articleIntroduction">
                <p>文章简介</p>
                <el-input rows="3" resize="none" type="textarea" v-model="blogDetails.description" placeholder="请输入文章简介"/>
            </div>
            <div class="articleContent">
                <p>文章内容</p>
                <el-input rows="12" resize="none" type="textarea" v-model="blogDetails.content" placeholder="请输入文章内容"/>
            </div>
            <div>
                <label>是否展示到首页</label>
                <el-switch v-model="blogDetails.atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
            </div>
            <div class="buttons">
                <el-button type="success" @click="toSaveChange">保存</el-button>
                <el-button type="danger"> 取消</el-button>
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
    import blog from '@/api/blog';
    @Component({
        components: {Footer, Header2}
    })

    export default class Edit extends Vue {

      blogDetails={};

      toSaveChange(){
        const Eblog=this.blogDetails;
        blog.updateBlog({blogId:Eblog.id},{title:Eblog.title,content:Eblog.content,description:Eblog.description,atIndex:Eblog.atIndex})
          .then(res => {
            this.$message.success(res.msg);
            this.$router.push({ path: `/details/${res.data.id}`})
          })
      }

      created(){
        blog.getDetail(this.$route.params.blogId).then(res=>{
          this.blogDetails=res.data;
        });
      }
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
