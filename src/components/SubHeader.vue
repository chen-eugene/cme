<template>
    <div id="sub-header">
        <div class="picture" :style="{'background-image': `url(${header}`}" alt=""/>
        <div class="tab-wrap">
            <div class="tabs">
                <div class="tab"
                     :class="{ 'active': index === active }"
                     v-for="(title, index) in tabs"
                     :key="index"
                     @click="switchTab(index)">
                    {{ title }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "SubHeader",
        data() {
            return {
                active: 0,
            }
        },
        props: {
            tabs: {
                type: Array,
                default: function () {
                    return ['高端设备制造', '电子信息设备', '交通运输设备', '智能制造', '工程技术服务']
                }
            },
            header: {
                type: String,
                default: function () {
                    return require('@/assets/header_introduce.png')
                }
            },
            primary: String
        },
        methods: {
            switchTab(index) {
                if (this.active !== index) {
                    this.active = index;
                    this.$emit('selected', index);
                }
            }
        }
    }
</script>

<style scoped lang="less">

    #sub-header {
        width: 100%;
        background: white;

        .picture {
            width: 100%;
            height: 450px;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
        }

        .nav {
            height: 40px;
            line-height: 40px;
            margin-left: 15px;
            font-size: 14px;
            border-bottom: 1px solid #F5F5F5;

            .home {
                display: inline-block;

                &:before {
                    display: inline-block;
                    content: '';
                    width: 20px;
                    height: 30px;
                    background-image: url("http://www.cme-cq.com/Templet/default/images/homeico.jpg");
                    background-size: 20px 30px;
                    vertical-align: middle;
                }
            }

            .primary, .secondary {
                display: inline-block;

                &:before {
                    content: '>';
                    margin: 0 10px;
                }
            }

            .primary {
                color: #1575be;
            }
        }

        .tab-wrap {
            text-align: left;

            .tabs {
                width: 1190px;
                height: 80px;
                background-color: white;
                box-sizing: border-box;
                margin: 0 auto;

                .tab {
                    display: inline-block;
                    width: 200px;
                    height: 80px;
                    line-height: 80px;
                    font-family: "微软雅黑";
                    color: black;
                    font-size: 16px;
                    text-align: center;
                    border-right: 2px solid #F5F5F5;
                    position: relative;

                    &:first-child {
                        border-left: 2px solid #F5F5F5;
                    }

                    &:hover {
                        cursor: pointer;
                        color: #1575be;

                        &::before {
                            background-color: #1575be;
                        }
                    }

                    &.active::before {
                        background-color: #1575be;
                    }

                    &::before {
                        display: inline-block;
                        background-color: #FFFFFF;
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 196px;
                        height: 4px;
                    }

                }
            }


        }

    }

</style>
