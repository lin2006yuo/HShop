<template>
    <div class="container">
        <h5 class="back" @click="$router.back()">返回</h5>
        <h1 class="title">灰蓝外卖</h1>
        <div class="tab-wrapper">
            <span class="tab" @click="isMess=true" :class="{current:isMess}">短信登陆</span>
            <span class="tab" @click="isMess=false" :class="{current:!isMess}">密码登陆</span>
        </div>
        <form action="" class="login_form" @submit.prevent="dosubmit">
            <div class="mess_login" v-show="isMess">
                <div class="phone">
                    <input type="text" placeholder="手机号" v-model="phone">
                    <span :class="{getcode : getcode}" @click="sendcode">{{codeText}}</span>
                </div>
                <input type="text" placeholder="验证码" v-model="reg">
            </div>
            <div class="pwd_login" v-show="!isMess">
                <div class="phone">
                    <input type="text" placeholder="手机号" v-model="phone">
                </div>
            </div>
            <div class="pwd_login" v-show="!isMess">
                <div class="phone">
                    <input :type="tow" placeholder="密码" v-model="pwd">
                    <span @click="changeTow">眼睛</span>
                </div>
            </div>
            <p class="low">温馨提示：未注册灰蓝外卖账号的手机用户，登陆时将自动注册，且代表已同意
                <b>《用户服务协议》</b>
            </p>
            <button>登陆</button>
        </form>
        <p>关于我们</p>
        <modal :tip="tip" :isshow="isshow" @bg="close" @btn-close="close" />
    </div>
</template>

<script type="text/ecmascript-6">
import Modal from "../../components/Modal/Modal.vue";
export default {
    data() {
        return {
            codeText: "获取验证码",
            isMess: true,
            tow: "password",
            phone: "",
            pwd: "",
            reg: "",
            phoneReg: /^[1][3,4,5,7,8][0-9]{9}$/,
            tip: "",
            isshow: false,
            getcode: false,
            codeTime: 5, //计时
            time: ""
        };
    },
    mounted() {},
    components: {
        Modal
    },
    watch: {
        phone() {
            if (this.phoneReg.test(this.phone)) {
                this.getcode = true;
            } else {
                this.getcode = false;
            }
        },
        codeTime() {
            if (this.codeTime === -1) {
                clearInterval(this.time);
                this.codeText = '发送验证码'
            }
        }
    },
    methods: {
        changeTow() {
            if (this.tow == "password") {
                this.tow = "text";
            } else {
                this.tow = "password";
            }
        },
        close() {
            this.isshow = false;
        },
        showModal(text){
            this.isshow = true
            this.tip = text
        },
        dosubmit() {
            if (this.phone === "") {
                this.isshow = true;
                this.tip = "手机号不能为空";
            } else {
                if (this.phoneReg.test(this.phone)) {
                    if (this.isMess) {
                        if (this.reg === "") {
                            this.showModal('验证码不能为空')
                        } else {
                            this.showModal('提交表单')
                        }
                    } else {
                        //密码登陆
                        if (this.pwd === "") {
                            this.showModal('密码不能为空')
                        } else {
                            this.showModal('密码不能为空')
                        }
                    }
                } else {
                    this.isshow = true;
                    this.tip = "手机格式不正确";
                }
            }
        },
        sendcode() {
            if (!this.getcode) {
                this.tip = "手机格式不正确";
                this.isshow = true;
            } else {
                //发送验证码
                //如果等于空执行，防止多次点击
                if (this.time === "") {
                    //启动倒计时
                    this.time = setInterval(() => {
                        this.codeText = `已发送(${this.codeTime--})s`;
                    }, 1000);
                    //发送请求
                }
            }
        }
    }
};
</script>

<style scoped lang="stylus">
.container {
    width: 100%;

    .back {
        font-weight: normal;
        color: #666;
        padding: 8px;
    }

    .title {
        text-align: center;
        color: #2a8fbd;
        font-size: 40px;
        margin: 30px 0;
    }

    .tab-wrapper {
        text-align: center;
        margin-bottom: 20px;

        .tab:nth-child(1) {
            margin-right: 30px;
        }

        .tab {
            font-weight: bold;
            position: relative;
            font-weight: normal;
        }

        .tab:after {
            content: '';
            width: 64px;
            height: 2px;
            position: absolute;
            right: 0;
            bottom: -4px;
            background-color: #000;
        }

        .current {
            color: #2a8fbd;
        }

        .current:after {
            background-color: #2a8fbd;
        }
    }

    .login_form {
        text-align: center;
    }

    input {
        margin: 0 auto;
        display: block;
        border: 1px solid #ddd;
        width: 80%;
        height: 40px;
        outline: none;
        border-radius: 5px;
        text-indent: 10px;
        box-shadow: 0 0 0 #fff;
        -webkit-appearance: none;
    }

    .phone {
        position: relative;
        margin-bottom: 17px;

        span {
            position: absolute;
            top: 14px;
            right: 50px;
            color: #999;
            font-size: 14px;
        }

        .getcode {
            color: #333;
        }
    }

    .low {
        width: 83%;
        margin: 0 auto;
        font-size: 14px;
        color: #999;
        text-align: left;
        margin-top: 15px;
    }

    button {
        width: 80%;
        margin-top: 15px;
        border: none;
        background-color: #2a8fbd;
        color: #ffffff;
        padding: 10px;
        font-size: 14px;
        border-radius: 5px;
    }

    p {
        text-align: center;
        color: #999;
        margin-top: 15px;
    }
}
</style>
