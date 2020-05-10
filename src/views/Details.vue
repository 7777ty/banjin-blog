<template>
    <div>
        <Header2></Header2>
        <div class="details">
            <section class="user-info">
                <div class="usersTitle">
                    <img class="avatar" alt="用户头像" :src="avatar"  >
                    <div class="title">
                        <p>{{blogDetails.title}}</p>
                        <p v-if="blogDetails.createAt===blogDetails.updatedAt" class="updateAt">用户名 发布于{{friendlyDate(blogDetails.createAt)}}</p>
                        <p v-else class="updateAt">用户更新于{{friendlyDate(blogDetails.updatedAt)}}</p>
                    </div>

                </div>
                <div class="description">
                    {{blogDetails.description}}
                </div>
            </section>
            <section class="article" v-html="markDown">
            </section>
        </div>
        <Footer></Footer>
    </div>

</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Footer from '@/components/Footer.vue';
    import Header2 from '@/components/Header2.vue';
    import blog from '@/api/blog';
    import  marked from 'marked';

    @Component({
        components: {Header2, Footer, }
    })
    export default class Details extends Vue {
        avatar='';
        blogDetails={
            content:'',
            description: '',
            title: '',
            createAt: Date,
            updatedAt: Date,
        };

        created(){
            blog.getDetail(this.$route.params.blogId).then(res=>{
                [this.blogDetails]=[res.data];
                this.avatar=res.data.user.avatar;
            });


        }
        get markDown(){
            return marked(this.blogDetails.content)
        }
    }
</script>

<style lang='scss' scoped>
    @import "~@/assets/styles/base.scss";
    .details{
        min-height: 500px;
    }
    .user-info{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .usersTitle{
        padding: 20px;
        width: 80%;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #D7D7D7;
    }
    .title{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 20px;
        p{
            font-size: 16px;
        }
        .updateAt{
            margin-top: 10px;
            font-size: 12px;
            color: $textLighterColor;
        }
    }
    .description{
        width: 70%;
        margin: 20px 50px;
        text-align: left;
        padding-left: 10px;
        border-left: 3px solid $bgColor;
        font-weight: bold;
        color: $textLighterColor;
    }
    .article{
        width: 70%;
        margin:auto ;
        text-align: left;

    }

</style>
