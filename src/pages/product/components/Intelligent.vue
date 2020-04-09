<template>
    <div id="intelligent">
        <p>
            智能制造及系统集成服务：该板块主要提供高精智能产品、离散型智能工厂设计以及传统产业自动化、智能化整体解决方案。拥有高端智能化齿轮加工生产线、线上物流补给系统、检测机器人、线上焊接机器人等智能化产品。是重庆本地最大的电子产品ODM/OEM制造企业之一。
        </p>
        <div class="img-list">
            <div class="item" v-for="(item,index) in images" :key="index">
                <img :src="item.image" alt=""/>
                <div class="title">{{item.title}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Intelligent",
        data() {
            return {
                images: [
                    {
                        image: 'http://www.cme-cq.com/files/2017-08/2017081009144228869.jpg',
                        title: '齿轮加工自动生产线'
                    },
                    {
                        image: 'http://www.cme-cq.com/files/2017-08/2017081010064685334.jpg',
                        title: '智能制造设备与系统'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    #intelligent {
        padding: 20px 0;

        p {
            font-size: 14px;
            color: black;
            line-height: 25px;
            text-indent: 24px;
            margin: 0 15px;
        }

        .img-list {
            width: 1104px;
            margin: 0 auto 40px;

            .item {
                display: inline-block;
                width: 260px;
                height: 230px;
                background: #EEEEEE;
                text-align: center;
                padding-top: 8px;
                border-bottom: 4px solid #1575be;
                margin: 15px 8px;

                img {
                    display: block;
                    width: 240px;
                    height: 170px;
                    margin: 0 auto;
                }

                .title {
                    font-size: 14px;
                    color: #1575be;
                    margin-top: 8px;
                }
            }

        }

    }
</style>
