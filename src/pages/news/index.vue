<template>
    <div class="news">
        <div class="header">
            新闻中心
        </div>
        <div class="news-wrapper">
            <div class="news clearfix" v-for="(item, index) in newsList" :key="index">
                <span class="title">{{ item.title }}</span>
                <span class="date">{{ item.date }}</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'news',

        data () {
            return {
                newsList: [
                    {
                        title: '【企业新闻专题】 保护生态，拥抱环保从我们做起',
                        date: '2019-12-04 12:31:10'
                    }, {
                        title: '【企业新闻专题】 保护生态，拥抱环保从我们做起',
                        date: '2019-12-04 12:31:10'
                    }, {
                        title: '【企业新闻专题】 保护生态，拥抱环保从我们做起',
                        date: '2019-12-04 12:31:10'
                    }, {
                        title: '【企业新闻专题】 保护生态，拥抱环保从我们做起',
                        date: '2019-12-04 12:31:10'
                    }, {
                        title: '【企业新闻专题】 保护生态，拥抱环保从我们做起',
                        date: '2019-12-04 12:31:10'
                    }, {
                        title: '【企业新闻专题】 保护生态，拥抱环保从我们做起',
                        date: '2019-12-04 12:31:10'
                    }, {
                        title: '【企业新闻专题】 保护生态，拥抱环保从我们做起',
                        date: '2019-12-04 12:31:10'
                    }, {
                        title: '【企业新闻专题】 保护生态，拥抱环保从我们做起',
                        date: '2019-12-04 12:31:10'
                    }, {
                        title: '【企业新闻专题】 保护生态，拥抱环保从我们做起',
                        date: '2019-12-04 12:31:10'
                    }, {
                        title: '【企业新闻专题】 保护生态，拥抱环保从我们做起',
                        date: '2019-12-04 12:31:10'
                    }
                ]
            }
        }
    }
</script>
<style lang="less">
    .news {
        overflow: hidden;

        .header {
            margin-left: 30px;
            margin-right: 30px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background-color: #1575be;
            color: #FFFFFF;
            font-size: 16px;
            border-radius: 0px 0px 15px 15px;
        }

        .news-wrapper {
            padding: 15px 50px;
            margin-top: 50px;

            .news {
                height: 40px;
                line-height: 40px;
                cursor: pointer;

                &:hover {
                    .title {
                        text-decoration: underline;
                    }
                }

                .title {
                    float: left;
                    font-size: 14px;
                }

                .date {
                    float: right;
                    font-size: 12px;
                    color: #666666;
                }
            }
        }
    }
</style>