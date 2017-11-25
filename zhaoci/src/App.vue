<style lang="scss">
    @import './styles/common.scss';
    @import './styles/page.scss';
    @import './styles/public.scss';
</style>

<template>
    <div id="app">
        <menu-list></menu-list>
        <router-view></router-view>
    </div>
</template>

<script>
    import $ from 'jquery';
    import menuList from './views/parial/menu.vue';

    export default {
        name: 'app',
        components:{
            menuList
        }
    }
</script>