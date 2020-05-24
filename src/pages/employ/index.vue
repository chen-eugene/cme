<template>
    <div class="employ">
        <sub-header :tabs="tabNames" @selected="selected" primary="招聘中心" :header="header"></sub-header>
        <div class="route-content">
            <component v-bind:is="`EmployList`" :categoryId="curTab.categoryId"></component>
        </div>
    </div>
</template>


<script>
    import SubHeader from '../../components/SubHeader'
    import axios from '../../assets/axios'
    import EmployList from './components/EmployList'

    export default {
        name: 'Employ',
        components: {
            EmployList,
            SubHeader
        },
        data() {
            return {
                header: require('@/assets/header_employ.jpg'),
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
                const res = await axios.get('api/category/list?categoryKey=employ')
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
    .employ {
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
