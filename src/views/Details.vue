<template>
    <div class="details">
        <Header2></Header2>
        <div class="users">
            <div class="usersTitle">
                <img class="avatar" alt="用户头像" :src="$store.state.user.avatar"  >
                <div class="title">
                    <p>{{blogDetails.title}}</p>
                    <p v-if="blogDetails.createAt===blogDetails.updatedAt">用户名 发布于{{blogDetails.createAt}}</p>
                    <p v-else>用户更新于{{blogDetails.updatedAt}}</p>
                </div>
            </div>
            <div class="usersContentWrapper">
                <div>
                    {{blogDetails.description}}
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
    import blog from '@/api/blog';


    @Component({
        components: {Header2, Footer, }
    })
    export default class Details extends Vue {
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
                console.log(this.blogDetails);
                console.log(res.data);
            });
            this.$store.dispatch('checkLogin')

        }
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
