<template>
    <div id="introduction">
        <div class="text">
            <h3>重庆机电智能制造有限公司简介</h3>
            <p>
                重庆机电智能制造有限公司是在重庆市政府的支持下，由重庆机电控股（集团）公司于2015年出资创立的智能制造产业化平台企业，注册资本1亿元，营业收入近6亿元。
            </p>

            <p>
                公司以自动化和信息化技术为核心，打造智能制造产业服务平台和技术创新平台，致力于为交通运输、电子信息、通用机械、军工装备、食品医药、智能物流、智慧城市等领域提供自动化设备、智能化生产系统、智能化仓储物流系统、智能化信息管理系统等一站式解决方案与服务。
            </p>
            <p>
                公司业务已覆盖智能制造项目咨询与管理、智能工厂整体规划与实施、智能制造项目系统集成与服务、智能装备及产品研发与生产、智能化管理系统开发与运维等，并成功实施多个国家智能制造示范项目，成为西部地区智能制造领域优选供应商。
            </p>
        </div>
        <img :src="logo" alt=""/>
    </div>
</template>

<script>
    export default {
        name: "Introduction",
        data() {
            return {
                logo: require('../../../../public/ic_logo.png')
            }
        }
    }
</script>

<style scoped lang="less">

    #introduction {
        height: 600px;
        width: 100%;

        img {
            width: 400px;
            /*height: 500px;*/
            float: right;
            margin-right: 100px;
            margin-top: 150px;
        }

        .text {
            display: inline-block;
            width: 450px;
            margin-left: 100px;
            margin-top: 60px;

            h3 {
                color: black;
                font-size: 16px;
                text-align: center;
            }

            p {
                font-size: 14px;
                text-indent: 24px;
                line-height: 30px;
                color: black;
            }
        }


    }


</style>
