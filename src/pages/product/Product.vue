<template>
    <div id="product">
        <sub-header :tabs="tabNames" @selected="selected" primary="产品中心" :header="header"></sub-header>
        <div class="route-content">
            <component v-bind:is="`ProductList`" :categoryId="curTab.categoryId"></component>
        </div>
    </div>
</template>

<script>
    import SubHeader from '../../components/SubHeader'
    import axios from '../../assets/axios'
    import ProductList from './components/ProductList'

    export default {
        name: "product",
        components: {
            SubHeader,
            ProductList
        },
        data() {
            return {
                header: require('@/assets/header_product.png'),
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
                const res = await axios.get('api/category/list?categoryKey=product');
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
