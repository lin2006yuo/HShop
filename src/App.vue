<template>
    <div id="app">
        <router-view class="rv"></router-view>
        <footer-guide v-show="$route.meta.showFooter"></footer-guide>
    </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import {reqFoodTypes} from './api'

export default {
    components: {
        FooterGuide
    },
    mounted() {
    //  this.$store.dispatch('getAddress').then(res => {
    //      console.log(res)
    //  })
    //  this.$store.dispatch('getType')
    },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    // 底部固定bottom
    .rv
        margin-bottom 50px
</style>
