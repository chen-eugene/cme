<template>
    <div class="news">
        <sub-header :tabs="navigation.tabs" @selected="selected"></sub-header>
        <router-view></router-view>
<!--        <div class="news-wrapper">-->
<!--            <div class="news clearfix" v-for="(item, index) in newsList" :key="index" @click="viewDetail(index)">-->
<!--                <span class="title">{{ item.title }}</span>-->
<!--                <span class="date">{{ item.date }}</span>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>


<script>
    import SubHeader from '../../components/SubHeader'

    export default {
        name: 'news',
        components: {
            SubHeader
        },
        data() {
            return {
                navigation: {
                    tabs: ['综合资讯', '领导讲话', '营销信息'],
                    routes: ['/news/composite', '/news/marketing', '/news/speech'],
                },
                newsList: [
                    {
                        title: '【中标喜讯】',
                        date: '2019-12-04 12:31:10'
                    }, {
                        title: '【智能诊断二期项目 - 中标喜讯】',
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
        },
        methods: {
            selected(index) {
                this.$router.push(this.navigation.routes[index])
            },
            viewDetail(index) {
                this.$router.push(`/news/detail/${index}`)
            }
        }
    }
</script>
<style lang="less">
    .news {
        overflow: hidden;

    }
</style>
