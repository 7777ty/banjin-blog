<template>
    <div class="home">
        <Header2 v-if="this.isLogin"></Header2>
        <Header1 v-else></Header1>
        <router-link class="item" v-for="blog in blogs" :key="blog.content" :to="`/details/${blog.id}`">
            <figure class="avatar">
                <img alt="用户头像" :src="blog.user.avatar">
                <figcaption>{{blog.user.username}}</figcaption>
            </figure>
            <div class="blog">
                <h3>{{blog.title}}<span>{{friendlyDate(blog.createdAt)}}</span></h3>
                <p>{{blog.description}}</p>
            </div>
        </router-link>
        <section class="pagination">
            <el-pagination
                    layout="prev, pager, next"
                    :total="total"
                    :current-page="page"
                    @current-change="onPageChange">
            </el-pagination>
        </section>
        <Footer></Footer>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Header1 from '@/components/Header1.vue';
    import Footer from '@/components/Footer.vue';
    import Header2 from '@/components/Header2.vue';
    import blog from '@/api/blog';

    @Component({
        components: {Header2, Footer, Header1}
    })
    export default class Index extends Vue {
        isLogin=false;
        blogs=[{
            content:'',
            description: '',
            title: '',
            createdAt: '',
            updatedAt: '',
            user:{}
        }];
        total=0;
        page=1 as number;

        onPageChange(newPage: string) {
            blog.getIndexBlogs({ page: parseInt(newPage )}).then((res: any ) => {
                this.blogs = res.data;
                this.total = res.total;
                this.page = res.page;
                this.$router.push({path:'/',query:{page:newPage}})
            })
        }

        created(){
            this.page =parseInt((this.$route.query.page)as string) ||1;
            this.$store.dispatch('checkLogin').then(res=>{
                this.isLogin=res;
            });

            blog.getIndexBlogs({page:this.page}).then((res: any) =>{
                this.blogs=res.data;
                this.total=res.total;
                this.page=res.page;
            })
        }
    }
</script>

<style lang='scss' scoped>
    @import '~@/assets/styles/base.scss';
    .home{
        display: flex;
        flex-direction: column;
    }
    .item{
        width: 80%;
        margin:20px auto;
        display: flex;
        figcaption {
            font-size: 12px;
            color: $textLighterColor;
        }
    }
    .blog{
        margin: 0 12px;
        h3{
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            span{
                margin-left: 8px;
                font-size: 12px;
                color: $textLighterColor;
            }
        }
        p{
            text-align: left;
        }
    }
    .pagination{
        margin-bottom: 30px;
    }

</style>
