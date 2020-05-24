<template>
    <div id="product">
        <sub-header :tabs="navigation.tabs" @selected="selected" primary="产品中心" :header="header" ref="header"></sub-header>
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
        name: "product",
        components: {
            SubHeader
        },
        data() {
            return {
                header: require('@/assets/header_contact.png'),
                navigation: {
                    tabs: [],
                    routes: [],
                }
            }
        },
        methods: {
            selected(index) {
                this.$router.push(this.navigation.routes[index])
            },
            viewDetail(index) {
                this.$router.push(`/news/detail/${index}`)
            },
            async queryKey() {
                const res = await axios.get('api/category/list?categoryKey=contact')
                for (let i = 0; i < res.data.length; i++) {
                    this.navigation.tabs.push(res.data[i].categoryName)
                    this.navigation.routes.push(`/contact/${res.data[i].categoryKey}/${res.data[i].categoryId}`)
                }
                this.selected(0)
            }
        },

        mounted() {
            this.queryKey()
        },

        activated() {
            if (this.$route.path.includes('/contactus')) {
                this.$refs['header'].active = 1
            } else {
                this.$refs['header'].active = 0
            }
        }
    }
</script>

<style scoped lang="less">
    #product {

        .route-content {
            padding: 30px;
            width: 1190px;
            min-width: 1190px;
            background: #FFFFFF;
            margin: 30px auto
        }
    }
</style>
