<template>
    <section>
        <div class="icon remove" @click="remove()" v-show="food.count > 0">-</div>
        <div class="count" v-show="food.count > 0">{{food.count}}</div>
        <div class="icon add" @click="add()">+</div>
    </section>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
        };
    },
    props: {
        food: Object
    },
    components: {},
    methods: {
        add(){
            console.log(this.food);
            
            //true为增加
            this.$store.dispatch('updateFoodCount',{isAdd: true,food: this.food})         
        },
        remove(){
            //false为减少
            this.$store.dispatch('updateFoodCount',{isAdd: false,food: this.food})
        }
    }
};
</script>

<style scoped lang="stylus">
section
    display flex
    div
        margin 0 4px
        text-align center
        &.icon
            width 20px  
            height 20px
            border-radius 50%
            box-sizing border-box
            line-height 18px
        &.add
            background-color #2a8fbd
        &.remove
            border 1px solid #ccc
            color #ccc
        &.count
            font-size 13px
            line-height 20px
            color #333
</style>
