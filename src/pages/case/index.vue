<template>
    <div class="case">
        <sub-header :tabs="tabNames" @selected="selected" primary="行业解决方案" :header="header"></sub-header>
        <div class="route-content">
            <component v-bind:is="`CaseList`" :categoryId="curTab.categoryId"></component>
        </div>
    </div>
</template>


<script>
    import SubHeader from '../../components/SubHeader'
    import axios from '../../assets/axios'
    import CaseList from './components/CaseList'

    export default {
        name: 'Case',
        components: {
            CaseList,
            SubHeader
        },
        data() {
            return {
                header: require('@/assets/header_case.jpg'),
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
                const res = await axios.get('api/category/list?categoryKey=case')
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
        }
    }
</script>
<style lang="less">
    .case {
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
