<template>
    <footer class="footer_guide">
        <a href="javascript:;" class="guide_item" :class="{on: '/msite'===$route.path}" @click="goTo('/msite')">
            <span>外卖</span>
        </a>
        <a href="javascript:;" class="guide_item " :class="{ on : '/search'===$route.path }" @click="goTo('/search')">
            <span>搜索</span>
        </a>
        <a href="javascript:;" class="guide_item " :class="{ on : '/order'===$route.path }" @click="goTo('/order')">
            <span>订单</span>
        </a>
        <a href="javascript:;" class="guide_item " :class="{ on : '/profile'===$route.path }" @click="goTo('/profile')">
            <span>我的</span>
        </a>
    </footer>
</template>
<script>
    export default{
        data(){
            return{
                isON: true
            }
        },
        mounted(){
            // console.log($router.path)
        },
        methods : {
            goTo(path){
                this.$router.push(path)
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/mixin.stylus"
    .footer_guide
        top-border-1px(#e4e4e4)
        position fixed
        z-index 100
        left 0
        right 0
        bottom 0
        background-color #fff
        width 100%
        height 50px
        display flex
        .guide_item
            display flex
            flex 1 
            text-align center
            flex-direction column
            align-items center
            justify-content center
            color: #999
            text-decoration none
            &.on
                color #02a774
            span
                font-size 12px
                margin-bottom 2px
</style>
