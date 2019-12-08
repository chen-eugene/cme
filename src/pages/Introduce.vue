<template>
    <div class="introduce">
        <div class="tabs">
            <div class="tab-item" v-for="(item, index) in tabs" :key="index" @mouseenter="activeTab = index">
                {{ item }}
            </div>
        </div>

        <div class="content">
            <div class="intro" v-show="activeTab === 0">
                企业简介
            </div>
            <div class="intro" v-show="activeTab === 1">
                组织机构
            </div>
            <div class="intro" v-show="activeTab === 2">
                团队风采
            </div>
            <div class="intro" v-show="activeTab === 3">
                企业荣誉
            </div>
            <div class="intro" v-show="activeTab === 4">
                技术创新
            </div>
            <div class="intro" v-show="activeTab === 5">
                合作伙伴
            </div>
            <div class="intro" v-show="activeTab === 6">
                宣传片
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'introduce',

        data () {
            return {
                activeTab: 0,
                tabs: ['企业简介', '组织机构', '团队风采', '企业荣誉', '技术创新', '合作伙伴', '宣传片']
            }
        }
    }
</script>
<style lang="less">
    .introduce {
        position: relative;
        padding: 15px 30px;

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
            min-height: 400px;
            margin-left: 120px;
            box-sizing: border-box;
            padding: 15px;
        }
    }
</style>