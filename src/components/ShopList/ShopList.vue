<template>
    <div class="msite_shop_list">
        <div class="select_list">
            <ul class="list">
                <li class="item">
                    <a href="">
                        <span>全部</span>
                        <span>^</span>
                    </a>
                </li>
                <li class="item">
                    <a href="">
                        <span>全部</span>
                        <span>^</span>
                    </a>
                </li>
                <li class="item">
                    <a href="">
                        <span>全部</span>
                        <span>^</span>
                    </a>
                </li>
                <li class="item">
                    <a href="">
                        <span>全部</span>
                        <span>^</span>
                    </a>
                </li>
            </ul>
            <p class="location">当前位置：{{location}}</p>
        </div>
        <div class="card_list">
            <div class="card" @click="$router.push('/shop')">
                <div class="shop">
                    <div class="img_box"><img src="./images/shop/shop.png" alt=""></div>
                    <div class="shop_detail">
                        <h5 class="shop_title">曾氏姜撞奶</h5>
                        <span class="star">5星</span>
                        <span class="shop_sort">传统甜品</span>
                        <span class="support">支持外卖</span>
                    </div>
                </div>
                <div class="onsale">
                    <div class="wrapper">
                        <span class="tuan">19.9元招牌单人餐，39.9元招牌双人餐</span>
                        <span class="quan">26元代30元，43.9代50元</span>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="shop">
                    <div class="img_box"><img src="./images/shop/shop.png" alt=""></div>
                    <div class="shop_detail">
                        <h5 class="shop_title">曾氏姜撞奶</h5>
                        <span class="star">5星</span>
                        <span class="shop_sort">传统甜品</span>
                        <span class="support">支持外卖</span>
                    </div>
                </div>
                <div class="onsale">
                    <div class="wrapper">
                        <span class="tuan">19.9元招牌单人餐，39.9元招牌双人餐</span>
                        <span class="quan">26元代30元，43.9代50元</span>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="shop">
                    <div class="img_box"><img src="./images/shop/shop.png" alt=""></div>
                    <div class="shop_detail">
                        <h5 class="shop_title">曾氏姜撞奶</h5>
                        <span class="star">5星</span>
                        <span class="shop_sort">传统甜品</span>
                        <span class="support">支持外卖</span>
                    </div>
                </div>
                <div class="onsale">
                    <div class="wrapper">
                        <span class="tuan">19.9元招牌单人餐，39.9元招牌双人餐</span>
                        <span class="quan">26元代30元，43.9代50元</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {};
    },
    props: {
        location: {
            type: String
        }
    },
    components: {}
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixin.stylus';
.msite_shop_list {
    width: 100%;
    background-color: #fff;

    .select_list {
        width: 100%;
        position: relative;
        bottom-border-1px(#e4e4e4);
        padding: 0 0 5px;

        .list {
            display: flex;
            list-style: none;

            .item {
                flex: 1;
                text-align: center;
                padding: 10px 0;

                a {
                    display: block;
                    width: 100%;
                    height: 100%;
                    text-decoration: none;
                    color: #666;
                    font-size: 14px;
                }
            }
        }

        p {
            font-size: 12px;
            color: #999;
            margin-left: 20px;
        }
    }

    .card_list {
        width: 100%;
        margin-top: 10px;

        .card {
            position: relative;
            margin-bottom: 8px;
            bottom-border-1px(#e4e4e4);

            .shop {
                width: 100%;
                display: flex;

                .img_box {
                    flex: 3;
                    padding: 0 20px;

                    img {
                        width: 100%;
                    }
                }

                .shop_detail {
                    flex: 7;
                    position: relative;
                    bottom-border-1px(#e4);

                    span {
                        display: block;
                        color: #666;
                        font-size: 12px;
                        margin: 5px 0;
                    }

                    .support {
                        color: #4caf50;
                    }
                }
            }

            .onsale {
                width: 100%;
                clearfix();
                margin-top: 5px;

                .wrapper {
                    float: right;
                    width: 65%;

                    span {
                        display: block;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        font-size: 12px;
                        color: #555;
                        margin-bottom: 8px;
                    }
                }
            }
        }
    }
}
</style>
