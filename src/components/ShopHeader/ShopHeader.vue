<template>
    <div class="page">
        <header class="header">
            <div class="back" @click="$router.back()">返回</div>
            <div class="header_img"></div>
            <div class="header_logo"><img src="./images/logo.jpg" alt=""></div>
            <div class="header_title">
                <span class="title_tag">品牌</span>
                <span class="title">{{info.name}}</span>
            
            </div>
        </header>
        <p class="info">月售{{info.sellCount}}单 {{info.description}} 约{{info.deliveryTime}}分钟 距离{{info.distance}}</p>
        <div class="support" v-if="info.support">
            <div class="wrapper">
                <span :class="activityColor[info.supports[0].type]">{{info.supports[0].name}}</span>
                <span>{{info.supports[0].content}}</span>
                <a href="javascript:;">4个优惠</a>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'

export default {
    data() {
        return {
            activityColor: ['activity-green', 'activity-red', 'activity-orange'],
        };
    },
    computed:{
        ...mapState(['info']),

    },
    components: {}
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixin.stylus';
.header
    width 100%
    position relative
    .back
        color: #fff
        margin-top 17px
        margin-left 5px
        position absolute
    .header_img
        width 100%
        height 50px
        background:  url('./images/jiahe.jpg') rgba(0,0,0,0.7) no-repeat 
        margin-bottom 40px
    .header_logo
        position absolute
        left calc(50% - 35px)
        top 15px
        width 70px
        height 70px
        box-sizing border-box
        padding 12px
        background-color #fff
        img 
            width 100%
            height 100%
    .header_title
        text-align center
        span:nth-child(1)
            font-size 12px
            padding 1px 4px
            border-radius 2px
            background-color #f8d128
        span:nth-child(2)
            font-size 22px
            font-weight bold
            vertical-align top
            color #111
            margin 0 3px
.info 
        font-size 12px
        text-align center
        color #666
        margin-top 4px
.support
    text-align center
    margin-top 6px
    margin-bottom 15px
    .wrapper
        width 70%
        margin 0 auto
        border 0.1px solid #e1e1e1
        padding 4px
        clearfix()
        span
            &.activity-green
                background-color #6fa94b
            &.activity-red
                background-color rgb(240, 115, 115)
            &.activity-orange
                background-color rgb(241, 136, 79)
        span:nth-child(1)
            font-size 12px
            padding 1px 4px
            color #ffffff
            font-weight bold
            float left
        span:nth-child(2)
            width 130px
            white-space nowrap
            text-overflow ellipsis
            overflow hidden
            color #666
            font-size 13px
            float left
        a
            float right
            font-size 13px
            color #666
            text-decoration none
</style>
