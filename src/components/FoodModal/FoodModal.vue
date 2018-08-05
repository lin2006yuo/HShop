<template>
<transition name="show">
    <section v-show="isShow">
        <div class="bg" @click="toggleShow()"></div>
        <div class="foodInfo_wrapper">
            <div class="foodInfo">
                <div class="img_box">
                    <img src="https://dummyimage.com/250/2a8fbd/2a8fbd" alt="">
                    <p>主、辅料：水、大米、南瓜</p>
                </div>
                <div class="detail_wrapper">
                    <h5>{{food.name}}</h5>
                    <p>月售91份 好评率100%</p>
                    <div>
                        <span class="price">￥9</span>
                        <div class="count"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</transition>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            isShow: false
        };
    },
    props: {
        food: Object,
    },
    components: {},
    methods:{
        toggleShow(){
            this.isShow = !this.isShow
        }
    }
};
</script>

<style scoped lang="stylus">
section {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    text-align: center;
    &.show-enter-active, &.show-leave-active{
        transition opacity .35s 
    }
    &.show-enter, &.show-leave-to{
        opacity 0
    }
    .bg {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
    }

    .foodInfo_wrapper {
        position: absolute;
        top: 100px;
        width: 100%;
        animation modal 0.35s
        @keyframes modal {
            from {
                transform scale(0)
            }to{
                transform scale(1)
            }
        }
        .foodInfo {
            width: 270px;
            margin: 0 auto;
            background-color: #fff;
            border-radius: 8px;
            overflow: hidden;

            .img_box {
                width: 100%;
                height: 70%;
                position: relative;
                img{
                    width 100%
                }
                p {
                    position: absolute;
                    left: 5px;
                    bottom: 10px;
                    color: #333;
                    font-size: 12px;
                }
            }
            .detail_wrapper{
                padding 20px
                h5{
                    text-align left 
                    color #000
                    margin-bottom 5px
                }
                p{
                    text-align left 
                    color #666
                    font-size 12px
                }
                div{
                    padding 20px 0 0
                    text-align left 
                    .price{
                        color #ff5000
                    }
                    .count{
                        float right 
                    }
                }
            }
        }
    }
}
</style>
