<template>
    <div class="introduce">
        <sub-header :tabs="navigation.tabs" @selected="selected" primary="企业介绍"
                    :header="header"></sub-header>
        <div class="content">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </div>
    </div>
</template>
<script>
    import SubHeader from '../../components/SubHeader'

    export default {
        name: 'introduce',
        components: {
            SubHeader,
        },
        data() {
            return {
                header: require('@/assets/header_introduce.png'),
                navigation: {
                    // tabs: ['企业简介', '组织架构', '团队风采', '荣誉资质', '技术创新', '合作伙伴', '宣传片'],
                    // routes: ['/introduce/introduction', '/introduce/framework', '',
                    //     '/introduce/honor', '/introduce/technology', '/introduce/companion', ''
                    // ],
                    tabs: ['企业简介', '组织架构', '荣誉资质', '技术创新', '合作伙伴'],
                    routes: ['/introduce/introduction', '/introduce/framework',
                        '/introduce/honor', '/introduce/technology', '/introduce/companion'],
                }
            }
        },
        methods: {
            selected(index) {
                console.log(this.navigation.routes[index]);
                this.$router.push(this.navigation.routes[index])
            }
        }
    }
</script>
<style lang="less" scoped>
    .introduce {
        position: relative;

        .content {
            margin: 50px auto;
            width: calc(100% - 480px);
            background: white;
            padding: 50px;
        }
    }
</style>
