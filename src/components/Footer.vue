<template>
    <div class="footer">
        <span>© 7ty 2020 wechat:568318359</span>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Footer extends Vue {

    }
</script>

<style lang='scss' scoped>
    .footer{
        height: 70px;
        background:#D7D7D7;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #6D6D6D;
    }
</style>
