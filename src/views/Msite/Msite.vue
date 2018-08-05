<template>
    <section class="msite">
        <!-- 搜索头部 -->
        <header-top>
            <span slot="left">天气</span>
            <span slot="left">深圳</span>
        </header-top>
        <!-- 轮播导航 -->
        <nav class="msite_nav">
            <div class="swiper-container" id="swiper1">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="./images/nav/1.png" alt=""></div>
                    <div class="swiper-slide"><img src="./images/nav/2.png" alt=""></div>
                    <div class="swiper-slide"><img src="./images/nav/3.png" alt=""></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </nav>
        <!-- item -->
        <div class="msite_icon_list">
            <div class="swiper-container" id="swiper2">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" >
                        <ul class="list">
                            <li class="item">
                                <a href="javascript:;"><img src="./images/shop/food.png" alt="">
                                    <span class="text">美食</span>
                                </a>
                            </li>
                            <li class="item">
                                <a href="javascript:;"><img src="./images/shop/food.png" alt="">
                                    <span class="text">美食</span>
                                </a>
                            </li>
                            <li class="item">
                                <a href="javascript:;"><img src="./images/shop/food.png" alt="">
                                    <span class="text">美食</span>
                                </a>
                            </li>
                            <li class="item">
                                <a href="javascript:;"><img src="./images/shop/food.png" alt="">
                                    <span class="text">美食</span>
                                </a>
                            </li>
                        </ul>
                        <ul class="list">
                            <li class="item">
                                <a href="javascript:;"><img src="./images/shop/food.png" alt="">
                                    <span class="text">美食</span>
                                </a>
                            </li>
                            <li class="item">
                                <a href="javascript:;"><img src="./images/shop/food.png" alt="">
                                    <span class="text">美食</span>
                                </a>
                            </li>
                            <li class="item">
                                <a href="javascript:;"><img src="./images/shop/food.png" alt="">
                                    <span class="text">美食</span>
                                </a>
                            </li>
                            <li class="item">
                                <a href="javascript:;"><img src="./images/shop/food.png" alt="">
                                    <span class="text">美食</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="swiper-slide" >
                        <ul class="list">
                            <li class="item">
                                <a href="javascript:;"><img src="./images/shop/food.png" alt="">
                                    <span class="text">美食</span>
                                </a>
                            </li>
                            <li class="item">
                                <a href="javascript:;"><img src="./images/shop/food.png" alt="">
                                    <span class="text">美食</span>
                                </a>
                            </li>
                            <li class="item">
                                <a href="javascript:;"><img src="./images/shop/food.png" alt="">
                                    <span class="text">美食</span>
                                </a>
                            </li>
                            <li class="item">
                                <a href="javascript:;"><img src="./images/shop/food.png" alt="">
                                    <span class="text">美食</span>
                                </a>
                            </li>
                        </ul>
                        <ul class="list">
                            <li class="item">
                                <a href="javascript:;"><img src="./images/shop/food.png" alt="">
                                    <span class="text">美食</span>
                                </a>
                            </li>
                            <li class="item">
                                <a href="javascript:;"><img src="./images/shop/food.png" alt="">
                                    <span class="text">美食</span>
                                </a>
                            </li>
                            <li class="item">
                                <a href="javascript:;"><img src="./images/shop/food.png" alt="">
                                    <span class="text">美食</span>
                                </a>
                            </li>
                            <li class="item">
                                <a href="javascript:;"><img src="./images/shop/food.png" alt="">
                                    <span class="text">美食</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="msite_recom_list">
            <ul class="list">
                <div class="list_wrapper">
                    <li class="item">
                        <a href=""><img src="./images/shop/recom.png" alt="">
                            <div class="wrapper">
                                <h5>名店抢购</h5>
                                <p>探鱼炉鱼</p>
                                <div clas="desc">69元2-3人餐</div>
                            </div>
                        </a>
                    </li>
                    <li class="item">
                        <a href=""><img src="./images/shop/recom.png" alt="">
                            <div class="wrapper">
                                <h5>名店抢购</h5>
                                <p>探鱼炉鱼</p>
                                <div clas="desc">69元2-3人餐</div>
                            </div>
                        </a>
                    </li>
                    <li class="item">
                        <a href=""><img src="./images/shop/recom.png" alt="">
                            <div class="wrapper">
                                <h5>名店抢购</h5>
                                <p>探鱼炉鱼</p>
                                <div clas="desc">69元2-3人餐</div>
                            </div>
                        </a>
                    </li>
                </div>
            </ul>
        </div>
        <shop-list :location="address.name"></shop-list>
    </section>
</template>
<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import ShopList from "../../components/ShopList/ShopList.vue";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import { mapState } from "vuex";
export default {
    components: {
        HeaderTop,
        ShopList
    },
    mounted() {
                var swiper = new Swiper("#swiper1", {
                    pagination: {
                        el: ".swiper-pagination"
                    }
                });
                var swiper = new Swiper("#swiper2", {
                });   
    },
    computed: {
        ...mapState(["address", "type"]),
        typeArr() {
            const { type } = this;
            const newArr = [];
            let minArr = [];
            let tmepArr = []
            let finalArr = []
            type.forEach(obj => {
                if (minArr.length == 0) {
                    newArr.push(minArr);
                }
                minArr.push(obj);
                if (minArr.length === 4) {
                    minArr = [];
                }
            })
            newArr.forEach(arr => {
                if(tmepArr.length == 0){
                    finalArr.push(tmepArr)
                }
                tmepArr.push(arr)
                if(tmepArr.length == 2){
                    tmepArr = []
                }
            })
            return finalArr
        }
    },
    watch: {

    }
};
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
@import '../../common/stylus/mixin.stylus';

.msite {
    width: 100%;
    background-color: #eee;

    .msite_nav {
        width: 100%;
        height: 200px;
        background-color: #fff;
        margin-top: 37px;

        img {
            width: 100%;
            height: 100%;
        }

        .swiper-container {
            width: 100%;
            height: 100%;

            .swiper-slide {
                width: 100%;
                height: 100%;
            }
        }
    }

    .msite_icon_list {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        background-color: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        #swiper2{
            width 100%
            height 100%
        }
            #pagination1 {
            position: static;
            }
            .list {
            display: flex;
            width: 100%;
            list-style: none;

            .item {
                flex: 1;
                text-align: center;
                padding: 3px 0;
                margin-bottom: 2px;

                a {
                    display: block;
                    width: 100%;
                    text-decoration: none;
                    color: #777;
                    font-size: 12px;

                    img {
                        margin: 0 auto 10px;
                        width: 60%;
                        height: 60%;
                        display: block;
                        border-radius: 50%;
                    }
                }
            }
            }
    }

    .msite_recom_list {
        width: 100%;

        .list {
            list-style: none;
            display: flex;
            width: 100%;
            justify-content: space-around;
            background-color: #fff;
            margin-top: 10px;

            .list_wrapper {
                width: 95%;
                display: flex;
                justify-content: space-around;

                .item {
                    width: 32%;
                    background-color: #f9f9f9;

                    a {
                        display: block;
                        width: 100%;
                        text-decoration: none;

                        img {
                            width: 100%;
                        }

                        .wrapper {
                            padding: 4px 5px 8px;
                            box-sizing: border-box;

                            h5 {
                                margin-bottom: 8px;
                                color: #ff9800;
                            }

                            p {
                                font-size: 12px;
                                margin-bottom: 3px;
                                font-weight: bold;
                                color: #333333;
                            }

                            div {
                                font-size: 10px;
                                padding: 2px;
                                border: 0.1px solid #e91e63;
                                color: #e91e63;
                                background-color: #f9f9f9;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>

