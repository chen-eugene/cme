<template>
    <div class="home">
        <swiper :options="swiperOption" ref="mySwiper" class="banner">
            <swiper-slide v-for="(item, index) in banner" :key="index" class="banner-item">
                <img :src="item.image" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="navigation">
            <div class="introduction">
                <div class="title">
                    机电简介
                </div>
                <p class="desc">
                    &nbsp;重庆机电智能制造有限公司是在重庆市政府的支持下，由重庆机电控股（集团）公司于2015年出资创立的智能制造产业化平台企业，注册资本1亿元，营业收入近6亿元。
                    公司以自动化和信息化技术为核心...
                    <span @click="gotoIntroduce">[详情]</span>
                </p>
            </div>
            <div class="tab-warp">
                <div class="tab-list">
                    <div class="tab" :class="{ 'active': index === navigation.active }"
                         v-for="(item, index) in navigation.tabs"
                         :key="index"
                         @mouseover="switchTab(index)">
                        {{ item.title }}
                    </div>
                </div>
                <p class="desc">
                    {{navigation.tabs[navigation.active].desc}}
                    <span>[详情]</span>
                </p>
            </div>
        </div>
        <div class="content">
            <div class="left-menu">
                <div class="menu-item">集团企业</div>
                <div class="sub-menu-list">
                    <div class="sub-menu-item">重庆机电股份有限公司</div>
                </div>
                <div class="menu-item">友情链接</div>
            </div>
            <div class="info">
                <div class="info-item">
                    <p class="label">新闻资讯</p>
                    <div class="info-list">
                        <img src="http://www.cme-cq.com/files/2020-02/20200213142856.jpg" alt=""/>
                        <div class="caption">
                            <div class="hot-news">
                                <p class="title">
                                    王玉祥等领导到重泵、卡福公司等复工复产企业一线指导慰问
                                </p>
                                <div class="detail">
                                    2月12日，机电集团党委书记、董事长王玉祥率集
                                    团办公室主任段炼一行到重泵公司对复工期间疫情
                                    防控工作进行检...<span>[详细]</span>
                                </div>
                            </div>
                            <div class="general-news">
                                <span class="title">
                                    綦江传动疫情阻击战和扭...
                                </span>
                                <span class="time">2020/2/13 2:24:51</span>
                            </div>
                            <div class="general-news">
                                <span class="title">
                                    綦江传动疫情阻击战和扭...
                                </span>
                                <span class="time">2020/2/13 2:24:51</span>
                            </div>
                            <div class="general-news">
                                <span class="title">
                                    綦江传动疫情阻击战和扭...
                                </span>
                                <span class="time">2020/2/13 2:24:51</span>
                            </div>
                            <div class="general-news">
                                <span class="title">
                                    綦江传动疫情阻击战和扭...
                                </span>
                                <span class="time">2020/2/13 2:24:51</span>
                            </div>
                        </div>
                    </div>
                    <div class="more">more</div>
                </div>
                <div class="info-item">
                    <p class="label">新闻资讯</p>
                    <div class="info-list">
                        <img src="http://www.cme-cq.com/files/2020-02/20200213142856.jpg" alt=""/>
                        <div class="caption">
                            <div class="hot-news">
                                <p class="title">
                                    王玉祥等领导到重泵、卡福公司等复工复产企业一线指导慰问
                                </p>
                                <div class="detail">
                                    2月12日，机电集团党委书记、董事长王玉祥率集
                                    团办公室主任段炼一行到重泵公司对复工期间疫情
                                    防控工作进行检...<span>[详细]</span>
                                </div>
                            </div>
                            <div class="general-news">
                                <span class="title">
                                    綦江传动疫情阻击战和扭...
                                </span>
                                <span class="time">2020/2/13 2:24:51</span>
                            </div>
                            <div class="general-news">
                                <span class="title">
                                    綦江传动疫情阻击战和扭...
                                </span>
                                <span class="time">2020/2/13 2:24:51</span>
                            </div>
                            <div class="general-news">
                                <span class="title">
                                    綦江传动疫情阻击战和扭...
                                </span>
                                <span class="time">2020/2/13 2:24:51</span>
                            </div>
                            <div class="general-news">
                                <span class="title">
                                    綦江传动疫情阻击战和扭...
                                </span>
                                <span class="time">2020/2/13 2:24:51</span>
                            </div>
                        </div>
                    </div>
                    <div class="more">more</div>
                </div>
            </div>
            <div class="right-menu">
                <div class="special-topic">
                    <div class="label">专题专栏</div>
                    <img src="http://www.cme-cq.com/Templet/default/images/zl03.jpg" alt=""/>
                    <img class="img-02" src="http://www.cme-cq.com/files/2017-07/2017072711193159008.jpg" alt="">
                </div>
                <div class="invitation-info">
                    <div class="label">招标信息</div>
                    <div class="item">
                        <span class="title">
                            重庆机电...
                        </span>
                        <span class="time">2020/2/13 2:24:51</span>
                    </div>
                    <div class="item">
                        <span class="title">
                            重庆机电...
                        </span>
                        <span class="time">2020/2/13 2:24:51</span>
                    </div>
                    <div class="item">
                        <span class="title">
                            重庆机电...
                        </span>
                        <span class="time">2020/2/13 2:24:51</span>
                    </div>
                    <div class="item">
                        <span class="title">
                            重庆机电...
                        </span>
                        <span class="time">2020/2/13 2:24:51</span>
                    </div>
                </div>
            </div>
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
            gotoIntroduce(){
                this.$router.push('/introduce/introduction')
            }
        }
    }
</script>
<style lang="less" scoped>
    .home {
        overflow: hidden;

        .banner {
            width: 100%;

            .banner-item {
                img {
                    width: 100%;
                }
            }
        }

        .navigation {
            height: 170px;
            width: 100%;

            .introduction {
                display: inline-block;
                width: 280px;

                .title {
                    color: white;
                    height: 60px;
                    line-height: 60px;
                    text-align: center;
                    background-color: #1575be;
                }

                > .desc {
                    font-size: 12px;
                    color: #535252;
                    text-indent: 24px;
                    padding: 10px 15px;
                    background-color: cornsilk;

                    > span {
                        color: #1575be;
                        cursor: pointer;
                    }
                }

            }

            .tab-warp {
                display: inline-block;
                width: calc(100% - 280px);
                height: 170px;
                position: relative;
                background-color: coral;
                float: right;

                .tab-list {

                    .tab {
                        display: inline-block;
                        width: 20%;
                        height: 60px;
                        line-height: 60px;
                        text-align: center;
                        background-color: #1575be;
                        color: white;

                        &:hover {
                            background-color: white;
                            color: #1575be;
                            cursor: pointer;
                        }

                        &.active {
                            background-color: white;
                            color: #1575be;
                            cursor: pointer;
                        }
                    }

                }

                > .desc {
                    font-size: 12px;
                    color: black;
                    text-indent: 24px;
                    padding: 10px 15px;

                    > span {
                        color: #1575be;
                    }
                }
            }

        }

        .content {

            .left-menu {
                width: 280px;
                height: 540px;
                display: inline-block;
                background-color: gainsboro;
                float: left;
                padding: 15px;
                box-sizing: border-box;

                .menu-item {
                    background-color: #1575be;
                    height: 40px;
                    line-height: 40px;
                    padding-left: 16px;
                    font-size: 16px;
                    color: white;
                }

                .sub-menu-list {
                    height: 430px;
                    margin-left: 16px;
                    background-color: white;

                    .sub-menu-item {
                        color: #888888;
                        font-size: 12px;
                        height: 26px;
                        line-height: 26px;
                        border-bottom: 1px solid #EEEEEE;

                        &:before {
                            background-image: url("http://www.cme-cq.com/Templet/default/images/jt02.jpg");
                            width: 16px;
                            height: 24px;
                            background-size: 16px 24px;
                            vertical-align: middle;
                            display: inline-block;
                            content: '';
                        }

                    }
                }


            }

            .info {
                width: calc(100% - 560px);
                float: left;
                padding-bottom: 20px;
                padding-right: 40px;
                padding-left: 20px;

                .info-item {

                    .label {
                        height: 60px;
                        line-height: 60px;
                        color: #1575be;
                        font-size: 16px;
                    }

                    .info-list {
                        border-bottom: 6px solid #EEEEEE;
                        padding-bottom: 16px;

                        > img {
                            width: 154px;
                            height: 170px;
                        }

                        .caption {
                            display: inline-block;
                            width: 284px;
                            margin-left: 16px;
                            max-height: 190px;
                            overflow: hidden;

                            .hot-news {
                                .title {
                                    line-height: 16px;
                                    font-size: 14px;
                                    color: #1575be;
                                    text-align: center;
                                }

                                .detail {
                                    font-size: 12px;
                                    text-indent: 24px;
                                    color: #717171;
                                }
                            }

                            .general-news {
                                height: 24px;
                                line-height: 24px;

                                .title {
                                    display: inline;
                                    color: black;
                                    font-size: 12px;

                                    &:before {
                                        display: inline-block;
                                        content: '';
                                        background-image: url('http://www.cme-cq.com/Templet/default/images/jt01.jpg');
                                        width: 16px;
                                        height: 24px;
                                        background-size: 16px 24px;
                                        vertical-align: middle;
                                    }
                                }

                                .time {
                                    color: #717171;
                                    font-size: 12px;
                                    float: right;
                                }

                            }


                        }

                    }

                    .more {
                        color: white;
                        width: 32px;
                        height: 12px;
                        line-height: 12px;
                        font-size: 12px;
                        background-color: #1575be;
                        border-radius: 3px;
                        text-align: center;
                        margin: 16px 0;
                    }
                }
            }

            .right-menu {
                width: 280px;
                float: right;
                padding-right: 15px;

                .special-topic {
                    .label {
                        height: 60px;
                        line-height: 60px;
                        color: #1575be;
                        font-size: 16px;
                    }

                    img {
                        width: 100%;
                        height: 70px;

                        &.img-02{
                            margin: 20px 0;
                        }

                    }

                }

                .invitation-info {

                    .label {
                        height: 60px;
                        line-height: 60px;
                        color: #1575be;
                        font-size: 16px;
                    }

                    .item {
                        height: 24px;
                        line-height: 24px;

                        .title {
                            display: inline;
                            color: black;
                            font-size: 12px;

                            &:before {
                                display: inline-block;
                                content: '';
                                background-image: url('http://www.cme-cq.com/Templet/default/images/jt01.jpg');
                                width: 16px;
                                height: 24px;
                                background-size: 16px 24px;
                                vertical-align: middle;
                            }
                        }

                        .time {
                            color: #717171;
                            font-size: 12px;
                            float: right;
                        }

                    }
                }

            }
        }


    }
</style>
