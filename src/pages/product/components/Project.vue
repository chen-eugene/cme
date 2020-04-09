<template>
    <div id="project">
        <p>
            工程技术服务及推广：重庆机电集团在提供高精智能装备的同时，提供工程总包、合同能源管理、仓储与第三方物流、工业再制造及企业金融等服务。是助推和支撑机电集团打造核心产业、培育战略性新兴产业、促进传统产业升级的重要力量，在机电集团的创新发展中发挥重要作用。
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
        name: "Project",
        data() {
            return {
                images: [
                    {
                        image: 'http://www.cme-cq.com/files/2014-12/2014122603041609741.png',
                        title: '工程设计与工程总包'
                    },
                    {
                        image: 'http://www.cme-cq.com/files/2014-12/2014122303251982390.jpg',
                        title: '金融服务'
                    },
                    {
                        image: 'http://www.cme-cq.com/files/2014-12/2014122603021491761.jpg',
                        title: '仓储及物流'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    #project {
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
