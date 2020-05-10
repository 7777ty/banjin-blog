<template>
<div></div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class MyBlogsBack extends Vue {
        beforeCreate(){
          this.$router.replace('/my-blogs')
        }
    }
</script>

<style lang='scss' scoped>

</style>
