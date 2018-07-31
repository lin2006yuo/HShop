<template>
    <section class="profile">
        <!-- <nav>我的</nav> -->
        <div class="login_bar">
            <div class="bg">
                <div class="shade"></div>
            </div>
            <div class="wrapper">
                <div class="img_box">
                    <img src="./images/ava.jpg" alt="">
                </div>
                <div class="login_info">
                    <router-link to="/login">
                        <p>登陆/注册</p>
                        <p>暂无绑定手机号</p>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="acount">
            <ul class="list">
                <li class="item">
                    <a href="">
                        <span class="number">0.00</span><span>元</span>
                        <p>余额</p>
                    </a>
                </li>
                <li class="item">
                    <a href="">
                        <span class="number">0.00</span><span>元</span>
                        <p>余额</p>
                    </a>
                </li>
                <li class="item">
                    <a href="">
                        <span class="number">0.00</span><span>元</span>
                        <p>余额</p>
                    </a>
                </li>
            </ul>
        </div>
        <div class="func">
            <ul class="list">
                <li class="item">
                    <a href="">
                        <span>我的订单</span><span>></span>
                    </a>
                </li>
                <li class="item">
                    <a href="">
                        <span>我的订单</span><span>></span>
                    </a>
                </li>
                <li class="item">
                    <a href="">
                        <span>我的订单</span><span>></span>
                    </a>
                </li>
                <li class="item">
                    <a href="">
                        <span>我的订单</span><span>></span>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
    
</script>
<style lang="stylus"  scoped>
    @import '../../common/stylus/mixin.stylus';
    .login_bar
        width 100%
        text-align center
        position relative
        .bg
            width 100%
            height 150px
            background linear-gradient(#28a8b1, #66d7d0)
            position relative
            overflow hidden
            .shade
                width 1000px 
                height 1000px
                position absolute
                top 75px
                left -312px
                background-color #fff
                border-radius 50%
        .wrapper
            position absolute
            top 35px
            left calc(50% - 54px)
            .img_box
                box-sizing border-box
                height 70px
                width 70px
                margin 0 auto
                border-radius 50%
                overflow hidden
                border 5px solid #eee
                background-color #fff
                img
                    width 100%
                    height 100%
            .login_info
                margin-top 5px
                a
                    text-decoration none
                    p:nth-child(1)
                        font-weight bold
                        margin-bottom 4px
                    p:nth-child(2)
                        color #666666
                        font-size 14px
    .acount
        width 100%
        position relative
        bottom-border-1px(#e4e4e4)
        .list
            display flex
            width 100%
            list-style none
            padding 8px 0
            .item
                text-align center
                flex 1
                a
                    text-decoration none
                    span:nth-child(1)
                        font-size 20px
                        font-weight bold
                        color #ff5000
                    span:nth-child(2)
                        font-size 12px
                        color #666
                    p
                        color #666666
                        font-size 12px
                        margin-top 6px
    .func
        width 100%
        .list
            text-decoration none
            .item
                position relative       
                bottom-border-1px(#e4e4e4)
                padding 25px
                a
                    text-decoration none 
                    color #666666
                    span:nth-child(2)
                        float right 
</style>

