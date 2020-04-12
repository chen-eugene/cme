<template>
    <div id="sub-header">
        <img src="http://prod-wj-lingfen.oss-cn-beijing.aliyuncs.com/others/picture3.png" alt=""/>
        <div class="nav">
            <div class="home">首页</div>
            <div class="primary">{{primary}}</div>
            <div class="secondary">{{tabs[active]}}</div>
        </div>
        <div class="tab-wrap">
            <div class="tabs">
                <div class="tab"
                     :class="{ 'active': index === active }"
                     v-for="(title, index) in tabs"
                     :key="index"
                     @mouseover="switchTab(index)">
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
                active: 0
            }
        },
        props: {
            tabs: {
                type: Array,
                default: function () {
                    return ['高端设备制造', '电子信息设备', '交通运输设备', '智能制造', '工程技术服务']
                }
            },
            primary: String
        },
        methods: {
            switchTab(index) {
                this.active = index;
                this.$emit('selected', index);
            }
        }
    }
</script>

<style scoped lang="less">

    #sub-header {
        width: 100%;

        > img {
            width: 100%;
            height: 195px;
        }

        .nav {
            height: 40px;
            line-height: 40px;
            margin-left: 15px;
            font-size: 14px;
            border-bottom: 1px solid #EEEEEE;

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
            margin-top: 10px;

            .tabs {
                height: 80px;
                background-color: lightgray;
                margin: 0 15px;
                box-sizing: border-box;

                .tab {
                    display: inline-block;
                    width: 110px;
                    height: 80px;
                    line-height: 80px;
                    color: black;
                    font-size: 14px;
                    text-align: center;
                    border-right: 1px solid white;

                    &:hover {
                        cursor: pointer;
                    }

                    &.active {
                        background-color: white;
                        border-top: 5px solid #1575be;
                        line-height: 70px;
                    }
                }
            }


        }

    }

</style>
