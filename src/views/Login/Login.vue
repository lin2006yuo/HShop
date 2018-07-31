<template>
    <div class="container">
        <h5 class="back" @click="$router.back()">返回</h5>
        <h1 class="title">灰蓝外卖</h1>
        <div class="tab-wrapper">
            <span class="tab" @click="isMess=true" :class="{current:isMess}">短信登陆</span>
            <span class="tab" @click="isMess=false" :class="{current:!isMess}">密码登陆</span>
        </div>
        <form action="" class="login_form">
            <div class="mess_login" v-show="isMess">
                <div class="phone">
                    <input type="text" placeholder="手机号">
                    <span>获取验证码</span>
                </div>
            <input type="text" placeholder="验证码">
            </div>
            <div class="pwd_login" v-show="!isMess">
                <div class="phone">
                    <input type="text" placeholder="手机号">
                </div>
            <input type="text" placeholder="密码">
            </div>
            <p class="low">温馨提示：未注册灰蓝外卖账号的手机用户，登陆时将自动注册，且代表已同意<b>《用户服务协议》</b></p>
            <button>登陆</button>
        </form>
        <p>关于我们</p>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            isMess:true
        };
    },
    components: {}
};
</script>

<style scoped lang="stylus">
    .container
        width 100%
        .back
            font-weight normal
            color #666
            padding 8px
        .title
            text-align center
            color #2a8fbd
            font-size 40px
            margin 30px 0
        .tab-wrapper
            text-align center
            margin-bottom 20px
            .tab:nth-child(1)
                margin-right 30px
            .tab
                font-weight bold
                position relative
                font-weight normal
            .tab:after
                content ''
                width 64px
                height 2px
                position absolute
                right 0
                bottom -4px
                background-color #000
            .current
                color #2a8fbd
            .current:after
                background-color #2a8fbd
        .login_form
            text-align center
        input
            margin 0 auto
            display block
            border 1px solid #ddd
            width 80%
            height 30px
            outline none  
            border-radius 5px
            text-indent 10px
            box-shadow 0 0 0 #fff
            -webkit-appearance: none;
        .phone
            position relative
            margin-bottom 17px
            span 
                position absolute
                top 13px
                right 50px
                color #666
                font-size 12px
        .low
            width 83%
            margin 0 auto
            font-size 14px
            color #999
            text-align left
            margin-top 15px
        button 
            width 80%
            margin-top 15px
            border none 
            background-color #2a8fbd
            color #ffffff
            padding 10px
            font-size 14px
            border-radius 5px
        p
            text-align center
            color #999
            margin-top 15px
</style>
