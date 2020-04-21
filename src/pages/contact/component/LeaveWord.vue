<template>
    <div class="leaveword">
        <div class="item name">
            <img src="../../../assets/ic_tag.png" alt=""/>
            <input class="input" placeholder="请输入贵司名称" v-model="reform.companyName">
        </div>
        <div class="item tel">
            <img src="../../../assets/ic_tel.png" alt=""/>
            <input class="input" placeholder="贵司联系电话" v-model="reform.contactMoblie">
        </div>
        <div class="item tag">
            <img src="../../../assets/ic_mine.png" alt=""/>
            <input class="input" placeholder="贵司联系人" v-model="reform.contactUser">
        </div>
        <div class="item msg">
            <img src="../../../assets/ic_msg.png" alt=""/>
            <textarea class="input" placeholder="请输入贵司需求" v-model="reform.content"></textarea>
        </div>

        <div class="footer">
            <div class="btn submit" @click="confirm">提交留言</div>
            <div class="btn clear" @click="reset">重置</div>
        </div>

    </div>
</template>
<script>
    // import toast from '@/components/niu-toast/index'
    import axios from '../../../assets/axios'

    export default {
        name: 'contact',
        data() {
            return {
                reform: {
                    companyName: '',
                    contactUser: '',
                    contactMoblie: '',
                    content: ''
                }
            }
        },
        methods: {
            validate() {
                if (this.reform.companyName === '') {
                    alert('姓名不能为空');
                    return false
                } else if (this.reform.contactUser === '') {
                    alert("姓名不能为空");
                    return false
                } else if (this.reform.contactMoblie === '') {
                    alert("姓名不能为空");
                    return false
                } else if (this.reform.content === '') {
                    alert("姓名不能为空");
                    return false
                }
                return true
            },
            async confirm() {
                if (this.validate()) {
                    await axios.post(`api/message/create`, this.reform);
                    this.reform = this.$options.data().reform
                }
            },
            reset() {
                this.reform = this.$options.data().reform
            }
        },

    }
</script>
<style lang="less">
    .leaveword {
        padding: 50px;
        width: 1200px;
        margin: 50px auto;
        background: #FFFFFF;

        .item {
            img {
                width: 25px;
                height: 25px;
                vertical-align: middle;
            }

            .input {
                vertical-align: middle;
                height: 34px;
                font-size: 14px;
                padding: 6px 12px;
                color: #333333;
                background-color: #FFFFFF;
                background-image: none;
                border-radius: 4px;
                margin-left: 15px;
                border: 1px solid #CCCCCC;
            }

            &.name, &.tel, &.tag {
                display: inline-block;

                .input {
                    width: 240px;
                }

                &.tag{
                    margin-left: 135px;
                }

                &.tel {
                    float: right;
                }

            }

            /*&.tag {*/
            /*    margin-top: 30px;*/

            /*    .input {*/
            /*        width: calc(100% - 40px);*/
            /*    }*/
            /*}*/

            &.msg {
                margin-top: 30px;

                img {
                    vertical-align: top;
                }

                .input {
                    width: calc(100% - 40px);
                    height: 240px;
                }
            }

        }

        .footer {
            text-align: center;
            margin-top: 35px;

            .btn {
                width: 185px;
                height: 58px;
                display: inline-block;
                border-radius: 8px;
                line-height: 58px;
                font-size: 16px;

                &.hover {
                    cursor: pointer;
                }
            }

            .submit {
                background-color: #1575be;
                color: white;
            }

            .clear {
                background-color: #E6E6E6;
                margin-left: 20px;
                color: #333333;
            }

        }

    }

</style>
