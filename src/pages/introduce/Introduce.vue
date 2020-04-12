<template>
    <div class="introduce">
        <sub-header :tabs="navigation.tabs" @selected="selected" primary="企业介绍">
        </sub-header>
        <div class="content">
            <router-view></router-view>
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
                navigation: {
                    tabs: ['企业简介', '组织架构', '团队风采', '荣誉资质', '技术创新', '合作伙伴', '宣传片'],
                    routes: ['/introduce/introduction', '/introduce/framework', '',
                        '/introduce/honor', '/introduce/technology', '/introduce/companion', ''
                    ],
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
        /*padding: 15px 30px;*/

        .tabs {
            width: 120px;
            position: absolute;
            left: 30px;

            .tab-item {
                width: 120px;
                height: 40px;
                line-height: 40px;
                background-color: #F1F1F1;
                cursor: pointer;
                box-sizing: border-box;
                text-align: center;

                & + .tab-item {
                    margin-top: 3px;
                }

                &:hover {
                    box-shadow: 5px 0px 0px inset #1575be;
                    background-color: #FFFFFF;
                }
            }
        }

        .content {
            padding: 0 15px;
        }
    }
</style>
