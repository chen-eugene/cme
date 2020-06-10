<template>
    <div id="product">
        <sub-header :tabs="navigation.tabs" @selected="selected" primary="产品中心" :header="header"
                    ref="header"></sub-header>
        <div class="route-content">
            <component v-bind:is="navigation.curTab"></component>
        </div>
    </div>
</template>

<script>
    import SubHeader from '../../components/SubHeader'
    import axios from '../../assets/axios'
    import ContactUs from './component/ContactUs'
    import LeaveWord from './component/LeaveWord'

    export default {
        name: "product",
        components: {
            SubHeader,
            ContactUs,
            LeaveWord
        },
        data() {
            return {
                header: require('@/assets/header_contact.jpg'),
                navigation: {
                    tabs: [],
                    routes: [],
                    curTab: 'LeaveWord',
                    tabComponents: ['LeaveWord','ContactUs']
                },
            }
        },
        methods: {
            selected(index) {
                this.navigation.curTab = this.navigation.tabComponents[index]
            },
            async queryKey() {
                const res = await axios.get('api/category/list?categoryKey=contact')
                for (let i = 0; i < res.data.length; i++) {
                    this.navigation.tabs.push(res.data[i].categoryName)
                    this.navigation.routes.push(`/contact/${res.data[i].categoryKey}/${res.data[i].categoryId}`)
                }
            }
        },

        mounted() {
            this.queryKey()
        },
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
