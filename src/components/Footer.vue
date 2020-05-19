<template>
    <div class="cme-footer">
        <!--        <p class="address">地址：重庆市南岸区江溪路6号 电话：023-62770078 Email：yan.zhang@cme-im.com</p>-->
        <div class="container left">
            <div class="menu">
                <div class="anchor" @click="gotoTarget(1)">企业介绍</div>
                <div class="anchor" @click="gotoTarget(2)">新闻中心</div>
                <div class="anchor" @click="gotoTarget(3)">产品中心</div>
                <div class="anchor" @click="gotoTarget(4)">智能制造应用</div>
                <div class="anchor" @click="gotoTarget(5)">招聘信息</div>
            </div>
            <div class="company">Copyright © 重庆机电智能制造有限公司 ALL Rights Reserved.</div>
            <div class="icp"><a href="http://beian.miit.gov.cn/" style="color: #FFFFFF">渝ICP备19014366号-1</a></div>
        </div>
        <div class="center container">
            <div class="menu">
                <div class="anchor" @click="gotoTarget(6)">联系方式</div>
            </div>
            <div class="phone">电话：023-62770078</div>
            <div class="address">地址：重庆市南岸区江溪路6号</div>
        </div>
        <div class="right container">
            <img class="qrcode" src="../assets/qrcode.jpg" alt="">
            <div class="text">官方公众号</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'cme-footer',
        data() {
            return {}
        },
        methods: {
            gotoTarget(type) {
                switch (type) {
                    case 1:
                        this.$router.push("/introduce");
                        break;
                    case 2:
                        this.$router.push("/news");
                        break;
                    case 3:
                        this.$router.push("/product");
                        break;
                    case 4:
                        this.$router.push("/case");
                        break;
                    case 5:
                        this.$router.push("/employ");
                        break;
                    case 6:
                        this.$router.push("/contact");
                        break
                }
            }
        }
    }
</script>
<style lang="less" scoped>

    div {
        text-align: center;
        font-size: 14px;
        color: white;
    }


    .cme-footer {
        height: 180px;
        width: 100%;
        background-color: #222222;
        /*background-color: rgba(8,60,112,1);*/
        /*padding-top: 126px;*/
        text-align: center;

        .container {
            display: inline-block;
            height: 100%;

            .anchor {
                display: inline-block;

                &:hover {
                    cursor: pointer;
                    color: #1575be;
                }
            }

            &.left {
                .anchor {
                    width: 100px;
                }
            }

            &.center {
                margin-left: 30px;

                .phone {
                    margin-top: 20px;
                }
            }

            &.right {
                margin-left: 50px;

                .qrcode {
                    display: block;
                    height: 100px;
                    width: 100px;
                    margin-top: 20px;
                }

                .text {
                    font-size: 12px;
                    margin-top: 10px;
                }
            }

            .menu {
                height: 60px;
                line-height: 60px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            }

            .company {
                height: 90px;
                line-height: 90px;
            }

        }


    }
</style>
