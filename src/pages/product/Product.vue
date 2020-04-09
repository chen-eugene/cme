<template>
    <div id="product">
        <sub-header :tabs="navigation.tabs" @selected="selected"></sub-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import SubHeader from '../../components/SubHeader'

    export default {
        name: "product",
        components: {
            SubHeader
        },
        data() {
            return {
                navigation: {
                    tabs: ['高端设备制造', '电子信息设备', '交通运输设备', '智能制造', '工程技术服务'],
                    routes: ['/product/equipment', '/product/electronic', '/product/transportation',
                        '/product/intelligent', '/product/project'],
                }
            }
        },
        methods: {
            selected(index) {
                this.$router.push(this.navigation.routes[index])
            }
        }

    }
</script>

<style scoped lang="less">
    #product {


    }
</style>
