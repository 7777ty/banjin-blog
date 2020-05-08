<template>
    <div class="home">
        <Header1></Header1>
        <div class="main">
            你好
        </div>

        <Footer></Footer>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Header1 from '@/components/Header1.vue';
    import Footer from '@/components/Footer.vue';
    import Header2 from '@/components/Header2.vue';
    @Component({
        components: {Header2, Footer, Header1}
    })
    export default class Index extends Vue {

    }
</script>

<style lang='scss' scoped>
    .home{
        display: flex;
        flex-direction: column;
    }
    .main{
        flex-grow:1;
    }
</style>
