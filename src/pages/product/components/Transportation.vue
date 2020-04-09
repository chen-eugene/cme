<template>
    <div id="transportation">
        <p>
            交通运输装备及系统集成服务：该板块主要提供通用航空器、轻型直升机、重型汽车、轨道交通车辆及发动机、变速箱、离合器、制动及转向系统、车桥、汽车悬挂系统、汽车轴承、紧固件、发动机缸体、缸盖铸件等产品，在中国交通运输、工程机械行业拥有重要地位，辐射全球市场。是中国交通运输装备整机及其零部件重要的研发和制造基地。
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
        name: "Transportation",
        data() {
            return {
                images: [
                    {
                        image: 'http://www.cme-cq.com/files/2014-12/2014121612311034784.jpg',
                        title: '精密铸造'
                    },
                    {
                        image: 'http://www.cme-cq.com/files/2017-08/2017081510282853431.png',
                        title: '重型汽车'
                    },
                    {
                        image: 'http://www.cme-cq.com/files/2014-09/2014092510311428389.jpg',
                        title: '轨道交通车辆'
                    },
                    {
                        image: 'http://www.cme-cq.com/files/2014-09/2014092601115020575.jpg',
                        title: '通用航空器'
                    },
                    {
                        image: 'http://www.cme-cq.com/files/2014-11/2014112701353842602.jpg',
                        title: '机车零部件'
                    },
                    {
                        image: 'http://www.cme-cq.com/files/2014-12/2014120202495272847.png',
                        title: '精密轴承'
                    },
                    {
                        image: 'http://www.cme-cq.com/files/2014-12/2014120212513769089.jpg',
                        title: '紧固件系列'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    #transportation {
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
