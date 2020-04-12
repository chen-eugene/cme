<template>
    <div class="employ">
        <sub-header :tabs="navigation.tabs" @selected="selected" primary="招聘中心"></sub-header>
        <router-view></router-view>
    </div>
</template>


<script>
    import SubHeader from '../../components/SubHeader'
    import axios from '../../assets/axios'

    export default {
        name: 'Employ',
        components: {
            SubHeader
        },
        data() {
            return {
                navigation: {
                    tabs: [],
                    routes: [],
                },
            }
        },
        methods: {
            selected(index) {
                console.log('index');
                this.$router.push(this.navigation.routes[index])
            },
            viewDetail(index) {
                this.$router.push(`/employ/detail/${index}`)
            },
            async queryKey() {
                const res = await axios.get('api/category/list?categoryKey=employ')
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
<style lang="less">
    .employ {
        overflow: hidden;

    }
</style>
