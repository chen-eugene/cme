<template>
    <div class="cme-header">
        <div class="header-wrapper clearfix">
            <div class="logo" @click="$router.push('/')">
                <img :src="logo" alt="">
            </div>
            <div class="menu-list clearfix">
                <div class="menu" :class="{ 'active': index === active }" v-for="(item, index) in menuList" :key="index"
                     @click="switchMenu(index,item)">
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
                        title: '企业文化',
                        route: '/culture'
                    }, {
                        title: '新闻中心',
                        route: '/news'
                    }, {
                        title: '产品中心',
                        route: '/product'
                    }, {
                        title: '智能制造应用',
                        route: '/case'
                    }
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
            switchMenu(index, item) {
                if (this.active !== index) {
                    this.$router.push(item.route)
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    .cme-header {
        background-color: #FFFFFF;
        height: 80px;
        width: 100%;

        .header-wrapper {
            margin: 0 auto;
            width: 1190px;
            min-width: 1190px;
            height: 80px;
            line-height: 80px;

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
                    width: 130px;
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
                        width: 130px;
                        height: 4px;
                    }
                }
            }
        }
    }
</style>
