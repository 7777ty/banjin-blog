<template>
    <div class="details">
        <Header2></Header2>
        <div class="user-info">
            <div class="usersTitle">
                <span><img :alt="this.user.username" :src="this.user.avatar"></span>
                <div class="title">
                    <p>{{this.user.username}}</p>
                </div>
            </div>
            <router-link :to="`/details/${blog.id}`" class="usersContentWrapper" v-for="blog in blogs" :key="blog.content">
                <div class="date">
                    <span class="day">{{splitDate(blog.updatedAt).date}}</span>
                    <span class="month">{{splitDate(blog.updatedAt).month+'月'}}</span>
                    <span class="year">{{splitDate(blog.updatedAt).year}}</span>
                </div>
                <div class="usersContent">
                    <div>
                        <p class="blogTitle">{{blog.title}}</p>
                        <p>{{blog.description}}</p>
                    </div>
                    <div class="edit">
                        <router-link :to="`/edit/${blog.id}`">编辑</router-link>
                        <span @click.prevent="toDeleteBlog(blog.id)">删除</span>
                    </div>
                </div>
            </router-link>

        </div>
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

<script >
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Header2 from '@/components/Header2.vue';
    import Footer from '@/components/Footer.vue';
    import blog from '@/api/blog';
    @Component({
        components: {Footer, Header2}
    })
    export default class MyBlogs extends Vue {
        blogs=[{
            content:'',
            description: '',
            title: '',
            createdAt: '',
            updatedAt: '',
            id:-1,
        }];
        user=this.$store.getters.userInfo;
        total=0;
        page=1 ;
        isLogin=false;


        splitDate(dataStr){
            const dateObj = typeof dataStr === 'object' ? dataStr : new Date(dataStr);
            return {
                date: dateObj.getDate(),
                month: dateObj.getMonth() + 1,
                year: dateObj.getFullYear()
            }
        }
        async toDeleteBlog(id){
            await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            });
            await blog.deleteBlog({blogId:id});
            this.$message.success('删除成功');
            this.blogs = this.blogs.filter(blog => blog.id !== id);

        }
        onPageChange(newPage) {
            blog.getBlogsByUserId(parseInt(this.user.id),{page:parseInt(newPage)}).then((res)=>{
                this.blogs = res.data;
                this.total = res.total;
                this.page = res.page;
                this.$router.push({path:"/my-blogs",query:{page:newPage}})
            })
        }

        created(){
            this.page =parseInt(this.$route.query.page) ||1;
            blog.getBlogsByUserId(this.user.id).then(res=>{
                this.blogs=res.data;
                this.total=res.total;
                this.page=res.page;
            });
        }

    }
</script>

<style lang='scss' scoped>
    @import "~@/assets/styles/base.scss";
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
        span{
            color: $textLighterColor;
            font-size: 14px;
        }
        .day{
            font-size: 30px;
            margin-bottom: 8px;
        }
    }
    img{
        margin-right: 20px;
    }
    .usersContent{
        text-align: left;
    }
    .blogTitle{
        font-size: 20px;
        margin-bottom: 10px;
        font-weight: bold;
    }
    .pagination{
        margin-bottom: 30px;
    }
    .edit{
        color: $bgColor;
        font-size: 14px;
        margin-top: 8px;
        span{
            margin-left: 5px;
         }
    }
</style>
