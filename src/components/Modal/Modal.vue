<template>
    <div class="modal_wrapper" v-show="isShow">
        <div class="bg" @click="$emit('bg')"></div>
        <transition name="bounce">
            <div class="modal" v-show="isShow">
                <p>{{tip}}</p>
                <button class="close" @click="$emit('btn-close')">关闭</button>
            </div>
        </transition>
    </div>
</template>

<script >
export default {
    data() {
        return {
            isShow: false
        };
    },
    props: ["tip", "isshow"],
    watch: {
        isshow() {
            this.isShow = this.isshow;
        }
    },
    components: {},
    methods: {}
};
</script>

<style scoped lang="stylus">
.modal_wrapper {
    width: 100%;
    height: 100%;

    .bg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.4);
    }

    .modal {
        position: absolute;
        width: 50%;
        height: 20%;
        background-color: #fff;
        left: 25%;
        top: 30%;
        border-radius: 10px;
        overflow: hidden;

        p {
            text-align: center;
            font-size: 20px;
            color: #2a8fbd;
            font-weight: bold;
            margin: 50px 0 10px;
        }

        .close {
            position: absolute;
            width: 100%;
            height: 20%;
            left: 0;
            color: #ffffff;
            bottom: 0;
            border: none;
            background: linear-gradient(#2a8fbd, #2a8fd5);
        }
    }
}

.bounce-enter-active {
    animation: bounces .35s
}
@keyframes bounces {
    0% {
        transform: scale(0);
    }
    85% {
        transform: scale(1.2);
    }
    100%{
           transform: scale(1);     
    }
}
</style>
