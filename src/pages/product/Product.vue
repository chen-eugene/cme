<template>
    <div id="product">
        <sub-header :tabs="navigation.tabs" @selected="selected" primary="产品服务"></sub-header>
        <router-view></router-view>
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
                navigation: {
                    tabs: [],
                    routes: [],
                }
            }
        },
        methods: {
            selected(index) {
                console.log('selected');
                this.$router.push(this.navigation.routes[index])
            },
            viewDetail(index) {
                this.$router.push(`/news/detail/${index}`)
            },
            async queryKey() {
                const res = await axios.get('api/category/list?categoryKey=product')
                for (let i = 0; i < res.data.length; i++) {
                    this.navigation.tabs.push(res.data[i].categoryName)
                    this.navigation.routes.push({
                        name: `${res.data[i].categoryKey}`,
                        params: {
                            categoryId: res.data[i].categoryId
                        }
                    })
                }
                this.selected(0)
            }
        },
        mounted() {
            this.queryKey()
        }
    }
</script>

<style scoped lang="less">
    #product {


    }
</style>
