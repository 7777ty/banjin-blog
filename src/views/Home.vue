<template>
    <div class="home">
        <Header></Header>
        <div class="main">
            你好
        </div>
        <Footer></Footer>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
    @Component({
        components: {Footer, Header}
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
