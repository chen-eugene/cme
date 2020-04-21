<template>
    <div class="home">
        <!--        <swiper :options="swiperOption" ref="mySwiper" class="banner">-->
        <!--            <swiper-slide v-for="(item, index) in banner" :key="index" class="banner-item">-->
        <!--                <img :src="item.image" alt="">-->
        <!--            </swiper-slide>-->
        <!--            <div class="swiper-pagination" slot="pagination"></div>-->
        <!--        </swiper>-->
        <div class="slogon">
            智能制造 引领机电未来
        </div>

    </div>
</template>
<script>
    export default {
        name: 'home',

        data() {
            return {
                swiperOption: {
                    autoplay: 1000,
                    setWrapperSize: true,
                    paginationClickable: true,
                    pagination: {
                        el: '.swiper-pagination',
                    }
                },
                banner: [
                    {
                        image: 'http://prod-wj-lingfen.oss-cn-beijing.aliyuncs.com/others/picture3.png',
                    },
                    {
                        image: 'http://prod-wj-lingfen.oss-cn-beijing.aliyuncs.com/others/picture3.png',
                    }
                ],
                navigation: {
                    tabs: [
                        {
                            title: '高端设备制造',
                            route: '/introduce',
                            desc: '高端装备制造及系统集成服务：该板块主要提供核二级泵、核电用离心式冷水机组、中小型水轮发电机、大型精密高端数控机床、大马力柴油引擎、中高压压缩机、工业风机、风力发电机组叶片、变压器、电线电缆等产品，享誉海内外，多个产品细分市场占有率处于国内领先地位，拥有多个中国名牌产品和中国驰名商标，是基础工业、化工、环保、能...'
                        }, {
                            title: '电子信息设备',
                            route: '/news',
                            desc: '电子信息设备及系统集成服务：该板块主要提供特种用途通信指挥系统与装备、通信设备与通信系统、核生化监测与处置装备，轨道交通类通讯与控制设备、北斗导航增强系统、汽车电子、网络开票机、智能燃气表等产品，自主研制的通信指挥系统等达到国际先进水平，在国防和国民经济相关领域发挥着重要作用，为国家军事装备的进步作出了...'
                        }, {
                            title: '交通运输设备',
                            route: '/product',
                            desc: '交通运输装备及系统集成服务：该板块主要提供通用航空器、轻型直升机、重型汽车、轨道交通车辆及发动机、变速箱、离合器、制动及转向系统、车桥、汽车悬挂系统、汽车轴承、紧固件、发动机缸体、缸盖铸件等产品，在中国交通运输、工程机械行业拥有重要地位，辐射全球市场。是中国交通运输装备整机及其零部件重要的研发和制造基地。...'
                        }, {
                            title: '智能制造',
                            route: '/case',
                            desc: '智能制造及系统集成服务：该板块主要提供高精智能产品、离散型智能工厂设计以及传统产业自动化、智能化整体解决方案。拥有高端智能化齿轮加工生产线、线上物流补给系统、检测机器人、线上焊接机器人等智能化产品。是重庆本地最大的电子产品ODM/OEM制造企业之一。...'
                        }, {
                            title: '工程技术服务',
                            route: '/info',
                            desc: '工程技术服务及推广：重庆机电集团在提供高精智能装备的同时，提供工程总包、合同能源管理、仓储与第三方物流、工业再制造及企业金融等服务。是助推和支撑机电集团打造核心产业、培育战略性新兴产业、促进传统产业升级的重要力量，在机电集团的创新发展中发挥重要作用。...'
                        }
                    ],
                    active: 0
                }
            }
        },
        methods: {
            switchTab(index) {
                this.navigation.active = index
            },
            gotoIntroduce() {
                this.$router.push('/introduce/introduction')
            }
        }
    }
</script>
<style lang="less" scoped>
    .home {
        width: 100%;
        height: 665px;
        background-image: url("../assets/background.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: relative;

        .slogon {
            width: 400px;
            height: 60px;
            font-size: 30px;
            color: white;
            font-weight: 600;
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
            text-align: center;
            position: absolute;
            top: calc(50% - 30px);
            left: calc(50% - 200px);
        }
    }
</style>
