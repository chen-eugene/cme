<template>
    <div class="cme-header">
        <div class="header-wrapper clearfix">
            <div class="logo" @click="$router.push('/')">
                <img :src="logo" alt="">
            </div>

            <div class="menu-list clearfix">
                <div class="menu" :class="{ 'active': index === active }" v-for="(item, index) in menuList" :key="index"
                     @click="switchMenu(item)">
                    {{ item.title }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'cme-header',

        data() {
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
                logo: 'http://www.cme-cq.com/Templet/default/images/logo.jpg'
            }
        },

        watch: {
            '$route'(to) {
                // eslint-disable-next-line no-console
                if (to.path === '' || to.path === '/') return this.active = -1;
                for (var i = 0; i < this.menuList.length; i++) {
                    if (to.path.indexOf(this.menuList[i].route) !== -1) {
                        this.active = i;
                        break
                    }
                }
            }
        },

        created() {
            let path = this.$route.path;
            if (path === '' || path === '/') return this.active = -1;
            for (var i = 0; i < this.menuList.length; i++) {
                if (path.indexOf(this.menuList[i].route) !== -1) {
                    this.active = i;
                    break
                }
            }
        },

        methods: {
            switchMenu(item) {
                this.$router.push(item.route)
            }
        }
    }
</script>
<style lang="less" scoped>
    .cme-header {
        background-color: #FFFFFF;
        height: 70px;
        border-bottom: 5px solid #1575be;
        min-width: 980px;

        .header-wrapper {
            width: 980px;
            margin: 0 auto;
            height: 70px;
            line-height: 70px;

            > .logo {
                font-size: 16px;
                font-weight: 600;
                width: 240px;
                height: 100%;
                cursor: pointer;
                display: inline-block;
                background-color: #1575be;
                line-height: unset;

                img {
                    width: 240px;
                    height: 65px;
                }
            }

            .menu-list {
                float: right;

                .menu {
                    float: left;
                    padding: 0 10px;
                    font-size: 16px;
                    font-weight: 500;

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
