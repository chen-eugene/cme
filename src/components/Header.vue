<template>
    <div class="cme-header">
        <div class="header-wrapper clearfix">
            <div class="logo" @click="$router.push('/')">
                <img :src="logo" alt="">
            </div>

            <div class="menu-list clearfix">
                <div class="menu" :class="{ 'active': index === active }" v-for="(item, index) in menuList" :key="index" @click="switchMenu(item)">
                    {{ item.title }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'cme-header',

        data () {
            return {
                menuList: [
                    {
                        title: '企业介绍',
                        route: '/introduce'
                    }, {
                        title: '新闻中心',
                        route: '/news'
                    }, {
                        title: '产品服务',
                        route: '/product'
                    }, {
                        title: '行业解决方案',
                        route: '/case'
                    }, {
                        title: '招标信息',
                        route: '/info'
                    }, {
                        title: '企业文化',
                        route: '/culture'
                    }, {
                        title: '人力资源',
                        route: '/hr'
                    }, {
                        title: '联系方式',
                        route: '/contact'
                    }
                ],
                active: -1,
                logo: 'http://prod-wj-lingfen.oss-cn-beijing.aliyuncs.com/others/logo.png'
            }
        },

        watch: {
            '$route' (to) {
                // eslint-disable-next-line no-console
                if (to.path === '' || to.path === '/') return this.active = -1
                for (var i = 0; i < this.menuList.length; i++) {
                    if (this.menuList[i].route.indexOf(to.path) > -1) {
                        this.active = i
                        break
                    }
                }
            }
        },

        created () {
            var path = this.$route.path
            if (path === '' || path === '/') return this.active = -1
            for (var i = 0; i < this.menuList.length; i++) {
                if (this.menuList[i].route.indexOf(path) > -1) {
                    this.active = i
                    break
                }
            }
        },

        methods: {
            switchMenu (item) {
                this.$router.push(item.route)
            }
        }
    }
</script>
<style lang="less" scoped>
    .cme-header {
        background-color: #FFFFFF;
        height: 50px;
        // border-bottom: 5px solid #1575be;
        min-width: 1190px;

        .header-wrapper {
            width: 1190px;
            margin: 0 auto;
            height: 50px;
            line-height: 50px;

            .logo {
                float: left;
                font-size: 18px;
                font-weight: 600;
                width: 180px;
                height: 40px;
                margin-top: 5px;
                cursor: pointer;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .menu-list {
                float: right;

                .menu {
                    float: left;
                    padding: 0 10px;

                    &:hover {
                        background-color: #1575be;
                        color: #FFFFFF;
                        cursor: pointer;
                    }

                    &.active {
                        background-color: #1575be;
                        color: #FFFFFF;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>