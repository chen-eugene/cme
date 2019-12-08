<template>
    <div class="news-detail">
        <template v-if="index === 0">
            <div class="title">中标喜讯</div>

            <p>2019年10月9日，重庆机电智能制造有限公司经过个余月的通宵达旦，积极备标，在全国千余家智能制造供应商中脱颖而出，成功中标工业和信息化部装备工业司“2019年智能制造系统解决方案供应商-数字化车间集成（仪器仪表）”。</p>
            <p>在西南片区，公司是唯一一家中标单位，公司的知名度已从地方层面推向国家层面，更是将机电集团的影响力迈向新的台阶，为公司后续市场的拓展添砖加瓦。本项目的成功中标，把公司和政府关系衔接得更加的紧密，积极响应国家号召，积极对社会企业提供优质的产品和服务，为国家智能制造的发展功薄蝉翼。</p>

            <div class="image-wrapper">
                <img :src="img1">
                <img :src="img2">
            </div>  
        </template>
        <template v-if="index === 1">
            <div class="title">中标喜讯</div>

            <p>2019年11月20日，重庆机电智能制造有限公司联合重庆工业赋能创新中心有限公司、重庆盟讯电子科技有限公司，在23家投标人中，以“第一梯队”成功中标重庆市经济和信息化委员会“智能制造诊断评估专项行动工作智能诊断服务机构（2019年第二批）政府采购项目”。</p>
            <p>今年5月，我司已成功实施智能诊断一期项目，对重庆市24家企业开展诊断评估工作，诊断工作的实施使得我司客户积累，市场拓展，品牌效应得到了极大的提高。智能诊断二期项目我司将获得重庆市38家企业诊断的机会，届时机电智能制造公司将会在智能制造行业更上一层楼！</p>

            <img :src="img4">
            <img :src="img5">
        </template>
    </div>
</template>
<script>
    export default {
        name: 'news-detail',

        data () {
            return {
                img1: 'http://prod-wj-lingfen.oss-cn-beijing.aliyuncs.com/others/picture1.png',
                img2: 'http://prod-wj-lingfen.oss-cn-beijing.aliyuncs.com/others/picture2.png',
                img4: 'http://prod-wj-lingfen.oss-cn-beijing.aliyuncs.com/others/picture4.png',
                img5: 'http://prod-wj-lingfen.oss-cn-beijing.aliyuncs.com/others/picture5.png',
                index: 0
            }
        },

        created () {
            // eslint-disable-next-line no-console
            this.index = Number(this.$route.params.id)
        }
    }
</script>
<style lang="less">
    .news-detail {
        padding: 30px 80px;
        padding-bottom: 80px;
        text-align: center;

        .title {
            text-align: center;
            font-size: 24px;
            font-weight: bold;
        }

        p {
            text-align: left;
            text-indent: 2em;
        }

        .image-wrapper {
            text-align: center;

            img {
                width: 400px;
            }
        }

        img {
            max-width: 900px;
        }
    }
</style>