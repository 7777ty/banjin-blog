<template>
    <div class="details">
        <Header2></Header2>
        <div class="user-info">
            <div class="usersTitle">
                <span><img :alt="user.id" :src="user.avatar"></span>
                <div class="title">
                    <p>{{user.username}}</p>
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

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Header2 from '@/components/Header2.vue';
    import Footer from '@/components/Footer.vue';
    import blog from '@/api/blog';
    @Component({
        components: {Footer, Header2}
    })
    export default class UsersBlogs extends Vue {
        blogs=[{
            content:'',
            description: '',
            title: '',
            createdAt: '',
            updatedAt: '',
            id:-1,
        }];
        user={};
        total=0;
        page=1 as number;
        isLogin=false;


        splitDate(dataStr){
            const dateObj = typeof dataStr === 'object' ? dataStr : new Date(dataStr);
            return {
                date: dateObj.getDate(),
                month: dateObj.getMonth() + 1,
                year: dateObj.getFullYear()
            }
        }

        onPageChange(newPage: string) {
            blog.getBlogsByUserId(this.$route.params.userId,{page:newPage}).then(res=>{
                this.blogs = res.data;
                this.total = res.total;
                this.page = res.page;
                this.$router.push({path:`/users-blogs/${this.user.id}`,query:{page:newPage}})
            })
        }

        created(){
            this.page =parseInt((this.$route.query.page)as string) ||1;
            this.$store.dispatch('checkLogin').then(res=>{
                this.isLogin=res;
            });

            blog.getBlogsByUserId(this.$route.params.userId).then(res=>{
                this.blogs=res.data;
                this.total=res.total;
                this.page=res.page;
                this.user=res.data[0].user;
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
    .blogTitle{
        font-size: 20px;
        margin-bottom: 10px;
        font-weight: bold;
    }
    .pagination{
        margin-bottom: 30px;
    }
</style>
