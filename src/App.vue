<template>
    <div id="app">
        <router-view class="rv"></router-view>
        <footer-guide v-show="$route.meta.showFooter"></footer-guide>
    </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
    components: {
        FooterGuide
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    // 底部固定bottom
    .rv
        margin-bottom 50px
</style>
