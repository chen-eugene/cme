<template>
    <div class="news">
        <sub-header :tabs="navigation.tabs" @selected="selected" primary="新闻中心" :header="header"></sub-header>
        <div class="route-content">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </div>
    </div>
</template>


<script>
    import SubHeader from '../../components/SubHeader'
    import axios from '../../assets/axios'

    export default {
        name: 'news',
        components: {
            SubHeader
        },
        data() {
            return {
                header: require('@/assets/header_news.png'),
                navigation: {
                    tabs: [],
                    routes: [],
                },
            }
        },
        methods: {
            selected(index) {
                console.log('index_backup.vue');
                this.$router.push(this.navigation.routes[index])
            },
            viewDetail(index) {
                this.$router.push(`/news/detail/${index}`)
            },
            async queryKey() {
                const res = await axios.get('api/category/list?categoryKey=news')
                for (let i = 0; i < res.data.length; i++) {
                    this.navigation.tabs.push(res.data[i].categoryName);
                    this.navigation.routes.push(`/news/${res.data[i].categoryKey}/${res.data[i].categoryId}`)
                }
                this.selected(0)
            }
        },
        mounted() {
            this.queryKey()
        },
        activated() {
            this.selected(0)
        }
    }
</script>
<style lang="less">
    .news {
        overflow: hidden;

        .route-content {
            padding: 30px;
            width: 1190px;
            min-width: 1190px;
            background: #FFFFFF;
            margin: 30px auto
        }
    }
</style>
