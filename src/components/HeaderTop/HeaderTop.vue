<template>
    <header class="msite_header">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="search_bar">
            <div class="search">
                <span class="icon">搜</span>
                <input type="text">
            </div>
            <span class="plus">+</span>
        </div>
    </header>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {};
    },
    props : {
        titel: {
            type: String
        }
    },
    components: {}
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixin.stylus';
    .msite_header {
        width: 100%;
        background-color: #fff;
        top: 0;
        position fixed
        z-index: 100;
        height 37px
        bottom-border-1px(#e4e4e4)
        .left{
            float left
            span {
                color: #999
                font-size: 14px
                text-align: center
                line-height: 37px
                margin-left: 8px
            }
        }
        .search_bar {
            float: right;
            margin-right: 10px;
            .icon {
                float: none;
                display: inline-block;
                vertical-align: middle;
                margin 0
                color #999
                line-height 30px
            }
            .search{
                display inline-block
                background-color #e9e9e9
                padding 0 10px
                border-radius 15px
                margin-top 3px
                input{
                    border none
                    outline none
                    background-color #e9e9e9
                    width 170px
                }
            }
            .plus {
                float: none;
                margin-left: 0;
                padding: 0 4px;
                line-height 30px
            }
        }
    }
</style>
