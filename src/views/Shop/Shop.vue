<template>
    <div class="page">
        <shop-header></shop-header>
        <div class="tab">
            <ul class="tab-list">
                <li class="tab-item"><router-link to="goods" :class="{ current: '/shop/goods' === $route.path }" replace >商品</router-link></li>
                <li class="tab-item"><router-link to="rating" :class="{ current: '/shop/rating' === $route.path }" replace> 评价</router-link></li>
                <li class="tab-item"><router-link to="info" :class="{ current: '/shop/info' === $route.path }"  replace>商家</router-link></li>
            </ul>
        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script type="text/ecmascript-6">
import ShopHeader from '../../components/ShopHeader/ShopHeader'

export default {
    data() {
        return {
        };
    },
    components: {
        ShopHeader
    },
    mounted() {
        this.$store.dispatch('getShopInfo')
    },
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixin.stylus';
.rv
    margin-bottom 0
    .tab
        width 100%
        margin-top 10px
        .tab-list
            position relative
            list-style none 
            display flex
            justify-content space-around
            text-align center
            bottom-border-1px(#e4e4e4)
            .tab-item
                margin-bottom 10px
                a 
                    text-decoration none 
                    color #666
                    &.current
                        color: #2a8fbd;
                        position relative
                        &:after{
                            content ''
                            position absolute
                            left 0
                            bottom -4px
                            width 100%
                            height 3px
                            border-radius 2px
                            background-color #2a8fbd;
                        }
</style>
