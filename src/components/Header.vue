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
                    }
                    // , {
                    //     title: '招标信息',
                    //     route: '/info'
                    // }
                    // , {
                    //     title: '企业文化',
                    //     route: '/culture'
                    // }
                    , {
                        title: '招聘信息',
                        route: '/employ'
                    }
                    , {
                        title: '联系方式',
                        route: '/contact'
                    }
                ],
                active: -1,
                logo: require('../../public/ic_logo.png')
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
        height: 80px;
        width: 100%;
        padding-left: 240px;
        padding-right: 240px;

        .header-wrapper {
            width: 100%;
            margin: 0 auto;
            height: 80px;
            line-height: 80px;
            display: inline-block;

            > .logo {
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                display: inline-block;
                line-height: unset;

                img {
                    height: 80px;
                }
            }

            .menu-list {
                float: right;
                display: inline-block;
                position: relative;
                height: 80px;

                .menu {
                    width: 110px;
                    height: 80px;
                    float: left;
                    padding: 0 10px;
                    font-size: 16px;
                    text-align: center;
                    font-weight: 500;
                    position: relative;

                    &.active {
                        color: #1575be;
                        cursor: pointer;
                    }

                    &:hover {
                        cursor: pointer;
                        color: #1575be;

                        &::before {
                            background-color: #1575be;
                        }
                    }

                    &.active::before {
                        background-color: #1575be;
                    }

                    &::before {
                        display: inline-block;
                        background-color: #FFFFFF;
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        width: 110px;
                        height: 4px;
                    }
                }
            }
        }
    }
</style>
