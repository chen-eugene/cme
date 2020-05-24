<template>
    <div class="news">
        <sub-header :tabs="tabNames" @selected="selected" primary="新闻中心" :header="header"></sub-header>
        <div class="route-content">
            <component v-bind:is="`NewsList`" :categoryId="curTab.categoryId"></component>
        </div>
    </div>
</template>


<script>
    import SubHeader from '../../components/SubHeader'
    import axios from '../../assets/axios'
    import NewsList from './components/NewsList'

    export default {
        name: 'news',
        components: {
            NewsList,
            SubHeader
        },
        data() {
            return {
                header: require('@/assets/header_news.jpg'),
                tabNames: [],
                tabs: [],
                curTab: {}
            }
        },
        methods: {
            selected(index) {
                this.curTab = this.tabs[index]
            },
            async queryKey() {
                const res = await axios.get('api/category/list?categoryKey=news');
                this.tabs = res.data;
                if (this.tabs.length > 0) {
                    this.curTab = this.tabs[0];
                }
                for (let i = 0; i < res.data.length; i++) {
                    this.tabNames.push(res.data[i].categoryName);
                }
            }
        },
        mounted() {
            this.queryKey()
        },
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
