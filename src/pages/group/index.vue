<template>
    <div class="group">
        <div class="header">团队协作是一种艺术</div>

        <div class="partiners clearfix">
            <div class="part" v-for="(item, index) in partiners" :key="index">
                <div class="avatar">
                    头像
                </div>

                <div class="content">
                    <div class="name">{{ item.name }}</div>
                    <div class="title">{{ item.title }}</div>
                    
                    <div class="hoitory">
                        <div class="stone" v-for="(his, subIndex) in item.history" :key="subIndex">
                            {{ his }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'group',

        data () {
            return {
                partiners: [
                    {
                        name: '张XX',
                        title: '首席工程师/工程总监',
                        history: [
                            '毕业于清华大学本科',
                            '10年工程经验',
                            '主持研发了XX系统',
                            '担任XX研究院XX'
                        ]
                    }, {
                        name: '张XX',
                        title: '首席工程师/工程总监',
                        history: [
                            '毕业于清华大学本科',
                            '10年工程经验',
                            '主持研发了XX系统',
                            '担任XX研究院XX'
                        ]
                    }, {
                        name: '张XX',
                        title: '首席工程师/工程总监',
                        history: [
                            '毕业于清华大学本科',
                            '10年工程经验',
                            '主持研发了XX系统',
                            '担任XX研究院XX'
                        ]
                    }, {
                        name: '张XX',
                        title: '首席工程师/工程总监',
                        history: [
                            '毕业于清华大学本科',
                            '10年工程经验',
                            '主持研发了XX系统',
                            '担任XX研究院XX'
                        ]
                    }
                ]
            }
        }
    }
</script>
<style lang="less">
    .group {
        padding: 30px;

        .header {
            font-size: 24px;
            font-weight: bold;
            text-align: left;
        }

        .partiners {
            margin-top: 40px;
            padding: 40px 80px;

            .part {
                width: 200px;
                height: 400px;
                box-sizing: border-box;
                float: left;
                background-color: #FFFFFF;
                border: 1px solid #EEE;
                cursor: pointer;
                transition: all .3s ease;
                box-sizing: 1px 1px 10px #CCC;

                &:hover {
                    transform: scale(1.2);
                }
                
                & + .part {
                    margin-left: 30px;
                }

                .avatar {
                    height: 200px;
                    border-bottom: 1px solid #EEE;
                    line-height: 200px;
                    text-align: center;
                    background-color: #F1F1F1;
                }

                .content {
                    padding: 15px;
                    text-align: left;
                    
                    .name {
                        font-size: 18px;
                        font-weight: bold;
                    }

                    .title {
                        font-size: 12px;
                        color: #666666;
                        font-weight: bold;
                    }

                    .hoitory {
                        margin-top: 30px;
                        font-size: 12px;
                        font-weight: bold;
                        color: #888888;
                        line-height: 1.6em;

                        .stone {
                            &::before {
                                content: '·';
                            }
                        }
                    }

                }
            }
        }
    }
</style>