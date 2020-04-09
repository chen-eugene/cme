<template>
    <div id="equipment">
        <p>
            高端装备制造及系统集成服务：该板块主要提供核二级泵、核电用离心式冷水机组、中小型水轮发电机、大型精密高端数控机床、大马力柴油引擎、中高压压缩机、工业风机、风力发电机组叶片、变压器、电线电缆等产品，享誉海内外，多个产品细分市场占有率处于国内领先地位，拥有多个中国名牌产品和中国驰名商标，是基础工业、化工、环保、能源及城镇化建设的中坚力量。
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
        name: "Equipment",
        data() {
            return {
                images: [
                    {
                        image: 'http://www.cme-cq.com/files/2014-12/2014120502150337166.jpg',
                        title: '发动机引擎'
                    },
                    {
                        image: 'http://www.cme-cq.com/files/2017-08/2017081009434192725.jpg',
                        title: '机床工具'
                    },
                    {
                        image: 'http://www.cme-cq.com/files/2014-12/2014121805115115440.jpg',
                        title: '通用设备'
                    },
                    {
                        image: 'http://www.cme-cq.com/files/2014-11/2014111110291291654.JPG',
                        title: '能源装备'
                    },
                    {
                        image: 'http://www.cme-cq.com/files/2014-11/2014111110303427983.jpg',
                        title: '输变电设备'
                    },
                    {
                        image: 'http://www.cme-cq.com/files/2014-12/2014120211192470592.png',
                        title: '点线电缆'
                    },
                    {
                        image: 'http://www.cme-cq.com/files/2014-12/2014120211512426897.jpg',
                        title: '电工材料'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    #equipment {
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
