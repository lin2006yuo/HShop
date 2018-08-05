<template>
    <section class="shopCart">
        <!-- 购物车列表 -->
        <transition name="move">
            <div class="cart_list" ref="cart_list" v-show="listShow">       
                <div class="list_titel">
                    <div class="title_left"><span>购物车</span></div>
                    <div class="title_right"><span @click="clearCart()">清空</span></div>
                </div>
                <ul class="list" ref="cart_item">
                    <li class="item" v-for="(food, index) in Cart" :key="index">
                        <div class="foods_item"><span>{{food.name}}</span></div>
                        <div class="count"><goods-counter :food="food"/></div>
                    </li>
                </ul>
            </div>
        </transition>
        <div class="cart_wrapper">
            <div class="cart">
                <!-- 购物车图标 -->
                <div class="icon-cart" @click="toggle()"><span v-if="totalCount">{{totalCount}}</span></div>
            </div>
            <div class="price">
                <p>￥{{totalPrice}}</p>
                <p>另需配送费￥{{info.deliveryPrice}}元</p>
            </div>
            <div class="goto" :class="payClass">
                {{payText}}
            </div>
        </div>
        <div class="bg" v-show="isShow" @click="toggle()"></div>
    </section>
</template>

<script type="text/ecmascript-6">
import {mapState,mapGetters} from 'vuex'
import GoodsCounter from '.././GoodsCounter/GoodsCounter.vue'
import { MessageBox } from 'mint-ui';

export default {
    data() {
        return {
            totalHeight: 0,
            itemHeight: 0,
            showCartList: false,
            cartList: {},
            itemList: {},
            isShow: false
        };
    },
    components: {
        GoodsCounter,
        MessageBox
    },
    updated() { 
        // console.log(1);
               
        // this.cartList = this.$refs.cart_list
        // this.itemList = this.$refs.cart_item
        // this.totalHeight = this.cartList.offsetHeight  //总高度
        // this.itemHeight = this.itemList.offsetHeight    //选项高度
        // if(this.showCartList){
        //     if(this.itemHeight === 0){
        //         this.cartList.style.transform = `translateY(0px)`
        //     }else{
        //         this.cartList.style.transform = `translateY(-${this.totalHeight}px)`
        //     }
        // }
        // if(listHeight === 38 && 74){
        //     cartList.style.transform = `translateY(0px)`
        // }else{
        //     cartList.style.transform = `translateY(-${listHeight}px)`
        // }
        // if(itemList.offsetHeight > 0){
        //     cartList.style.transform = `translateY(-${listHeight}px)`
        // }
        
    },
    mounted() {
        // console.log(GoodsCounter)
    },
    computed: {
        ...mapState(['Cart','info']),
        ...mapGetters(['totalCount','totalPrice']),
        payClass() {
            const {totalPrice} = this
            const {minPrice} = this.info
            return totalPrice >= minPrice ? 'enough' : 'not-enough'
        },
        payText() {
            const {totalPrice} = this
            const {minPrice} = this.info
            if(totalPrice === 0){
                return `￥${minPrice}起送`
            }else if(totalPrice < minPrice){
                return `还差￥${minPrice-totalPrice}元起送`
            }else{
                return '去结算'
         }
        },
        listShow(){
            if(this.totalCount === 0){
                this.isShow = false
                return false
            }else{
                return this.isShow
            }
        }
    },
    methods: {
        //点击图标显示购物车
        toggle(){
            if(this.totalCount > 0){
                 this.isShow = !this.isShow
            }
            // this.$refs.cart_list.style.transform = `translateY(-150px)`
        },
        clearCart(){
            MessageBox.confirm('确定清空购物车吗?').then(action => {
                this.$store.dispatch('clearCart')
            },()=>{});
        }
    }
};
</script>

<style scoped lang="stylus">
.shopCart 
    width 100%
    display flex
    flex-direction column
    bottom 0
    .cart_wrapper
        display flex
        width 100%
        z-index 1000
        background-color #2b323d
        bottom 0
        position absolute
        .cart
            flex 2
            position relative
            padding 0 10px
            .icon-cart
                text-align center
                position absolute
                bottom 0
                left 0
                width 45px
                height 45px
                border-radius 50%
                background-color #131c29
                border 5px solid #2a8fbd
                left 10px
                line-height 45px
                font-size 20px
                color #fff
                font-weight bold
        .price
            z-index 1000
            flex 6
            background-color #2b323d
            p:nth-child(1)
                margin 6px 0 4px
                font-weight bold
                color #ffeb3b
            p:nth-child(2)
                color #e4e4e4
                font-size 12px
        .goto
            z-index 1000
            flex 4
            line-height 43px
            color #fff
            background-color #2b323d
            &.enough
                background-color #4caf50
    .cart_list
        max-height 300px  //限制高度
        overflow hidden     //为后面添加swiper做准备
        z-index 1
        width 100%
        position absolute
        transform translateY(-100%)
        transition transform .35s
        &.move-enter-active, &.move-leave-active
            transition transform .35s
        &.move-enter, &.move-leave-to
            transform translateY(100%)
        .list_titel
            display flex
            width 100%
            background-color #f4f4f8
            .title_left
                padding 10px
                flex 8
            .title_right
                flex 2
                border-left 1px solid #e4e4e4
                background #f5f8fa
                span 
                    display block
                    height 100%
                    line-height 36px
                    margin-left 8px
        .list
            .item
                display flex
                padding 17px
                background-color #fff
                .foods_item
                    flex 8
                .count
                    flex 2
    .bg
        position absolute
        top 0
        height 100%
        width 100%
        background-color rgba(0,0,0,0.5)


</style>
