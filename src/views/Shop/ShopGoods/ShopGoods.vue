<template>
    <div class="page">
        <div class="goods_wrapper">
            <div class="flex-content">
                <nav class="nav_wrapper">
                    <div class="content">
                        <ul class="list">
                            <li class="item" v-for="(item, index) in goods" :key="index" :class="{current: index===currentIndex}" @click="navClick(index)">
                                <a href="javascript:;">
                                    <span>{{item.name}}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="goods_list">
                    <div class="content">
                        <ul class="list" v-for="(goodsort,index) in goods" :key="index">
                            <li class="item_title">{{goodsort.name}}</li>
                            <li class="item" v-for="(item,index) in goodsort.foods" :key="index">
                                <div class="img_box"><img src="https://dummyimage.com/300" alt="" @click="showFoodModal(item)"></div>
                                <div class="info_box">
                                    <h5>{{item.name}}</h5>
                                    <p class="description">{{item.description}}</p>
                                    <p>
                                        <span>月售{{item.sellCount}}份</span>
                                        <span>好评率{{item.rating}}%</span>
                                    </p>
                                    <p>
                                        <span class="price">￥{{item.price}}</span>
                                        <span class="oldprice" v-if="item.oldprice !== ''">{{item.oldPrice}}</span>
                                    </p>
                                    <div class="buy">
                                        <goods-counter :food="item" />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>         
        </div>
        <food-modal ref="foodModal" :food="food" />
        <shop-cart/>
    </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
import GoodsCounter from "../../../components/GoodsCounter/GoodsCounter";
import FoodModal from "../../../components/FoodModal/FoodModal.vue";
import ShopCart from "../../../components/ShopCart/ShopCart";
import { mapState } from "vuex";
export default {
    data() {
        return {
            scrollY: 0,
            tops: [],
            navScroll: "",
            goodsScroll: "",
            food: {}
        };
    },
    components: {
        GoodsCounter,
        FoodModal,
        ShopCart
    },
    mounted() {
        this.$store.dispatch("getShopGoods").then(() => {
            // console.log('更新完成')
            this.$nextTick(() => {
                //初始化better-scroll
                this._initScroll();
                //收集tops
                this._initTops();
            });
        });
    },
    computed: {
        ...mapState(["goods"]),
        currentIndex() {
            const index = this.tops.findIndex((top, index) => {
                return (
                    this.scrollY > top - 30 &&
                    this.scrollY < this.tops[index + 1] - 30
                );
            });
            return index >= 0 ? index : 8;
        }
    },
    methods: {
        _initScroll() {
            //nav
            this.navScroll = new BScroll(".nav_wrapper", {
                click: true
            });
            //goods
            this.goodsScroll = new BScroll(".goods_list", {
                probeType: 2,
                click: true
            });
            this.goodsScroll.on("scroll", ({ x, y }) => {
                this.scrollY = Math.abs(y);
            });
            this.goodsScroll.on("scrollEnd", ({ x, y }) => {
                this.scrollY = Math.abs(y);
            });
        },
        _initTops() {
            const lis = document.getElementsByClassName("item_title");
            //    console.log(lis)
            for (let i of lis) {
                this.tops.push(i.offsetTop);
            }
        },
        scroll(pos) {
            console.log(pos.y);
        },
        navClick(index) {
            const y = this.tops[index];
            this.scrollY = y;
            this.goodsScroll.scrollTo(0, -y, 450, "easing");
        },
        showFoodModal(food) {
            this.food = food;
            this.$refs.foodModal.toggleShow();
        }
    }
};
</script>

<style scoped lang="stylus">
.page {
    height: 100%;
    .goods_wrapper {
        float: left;
        height 100%
        .flex-content {
            display: flex;
            .nav_wrapper {
                flex: 2;
                height: 400px;
                overflow: hidden;
                background-color: #f3f3f3;

                .list {
                    text-align: center;
                    list-style: none;

                    .item {
                        a {
                            text-decoration: none;
                            color: #666;
                            font-size: 13px;
                            display: block;
                            padding: 17px 0;
                        }

                        &.current {
                            background-color: #fff;

                            a {
                                color: #2a8fbd;
                            }
                        }
                    }
                }
            }

            .goods_list {
                flex: 7;
                height: 100%;
                overflow: hidden;
                height: 460px;

                .list {
                    list-style: none;
                }

                .item_title {
                    color: #666;
                    font-size: 13px;
                    padding: 6px 0 6px 6px;
                    background-color: #f3f3f3;
                }

                .item {
                    padding: 10px 17px 10px 10px;
                    display: flex;

                    .img_box {
                        box-sizing: border-box;
                        padding: 0 10px 0;
                        flex: 3;

                        img {
                            width: 100%;
                        }
                    }

                    .info_box {
                        width: 100%;
                        flex: 8;

                        h5 {
                            margin-bottom: 8px;
                        }

                        .description {
                            width: 150px;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            font-size: 12px;
                        }

                        span {
                            color: #666;
                            font-size: 12px;
                            margin-bottom: 8px;

                            &.price {
                                font-size: 13px;
                                color: #ff5000;
                            }

                            &.oldprice {
                                font-size: 13px;
                                color: #666;
                                text-decoration: line-through;
                            }
                        }

                        .buy {
                            float: right;
                        }
                    }
                }
            }
        }
    }
}
</style>
