<template>
    <div id="electronic">
        <p>
            电子信息设备及系统集成服务：该板块主要提供特种用途通信指挥系统与装备、通信设备与通信系统、核生化监测与处置装备，轨道交通类通讯与控制设备、北斗导航增强系统、汽车电子、网络开票机、智能燃气表等产品，自主研制的通信指挥系统等达到国际先进水平，在国防和国民经济相关领域发挥着重要作用，为国家军事装备的进步作出了重要贡献。
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
        name: "Electronic",
        data() {
            return {
                images: [
                    {
                        image: 'http://www.cme-cq.com/files/2017-08/2017081511214290267.png',
                        title: '高性能环保应急指挥系统'
                    },
                    {
                        image: 'http://www.cme-cq.com/files/2014-12/2014120402410394710.jpg',
                        title: '自动售检票系统'
                    },
                    {
                        image: 'http://www.cme-cq.com/files/2014-11/2014111710323318848.png',
                        title: '网络开票机'
                    },
                    {
                        image: 'http://www.cme-cq.com/files/2014-11/2014111710333822222.jpg',
                        title: '只能燃气表'
                    },
                    {
                        image: 'http://www.cme-cq.com/files/2014-11/2014111702411150455.jpg',
                        title: '检测设备系列'
                    },
                    {
                        image: 'http://www.cme-cq.com/files/2014-11/2014111702423700462.png',
                        title: '检测仪系列'
                    },
                    {
                        image: 'http://www.cme-cq.com/files/2014-12/2014121612250221343.jpg',
                        title: '汽车电子类'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    #electronic {
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
