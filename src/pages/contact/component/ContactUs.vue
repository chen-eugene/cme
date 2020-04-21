<template>
    <div class="contactus">

    </div>
</template>
<script>
    // import toast from '../../components/niu-toast/index'

    export default {
        name: 'contact',
        data() {
            return {
                info: {
                    name: '',
                    tel: '',
                    title: '',
                    content: ''
                }
            }
        },
        methods: {
            validate() {
                if (this.info.name === '') {
                    alert('姓名不能为空');
                    return false
                } else if (this.info.tel === '') {
                    alert("姓名不能为空");
                    return false
                } else if (this.info.title === '') {
                    alert("姓名不能为空");
                    return false
                } else if (this.info.content === '') {
                    alert("姓名不能为空");
                    return false
                }
                return true
            },
            confirm() {
                if (this.validate()) {
                    console.log('')
                }
            },
            reset() {
                this.info = this.$options.data().info
            }
        },

    }
</script>
<style lang="less">
    .contactus {
        padding: 50px;
        width: 100%;
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

            &.name, &.tel {
                display: inline-block;

                .input {
                    width: 320px;
                }

                &.tel {
                    float: right;
                }

            }

            &.tag {
                margin-top: 30px;

                .input {
                    width: calc(100% - 40px);
                }
            }

            &.msg {
                margin-top: 30px;

                img {
                    vertical-align: top;
                }

                .input {
                    width: calc(100% - 40px);
                    height: 240px;
                    resize: none;
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
