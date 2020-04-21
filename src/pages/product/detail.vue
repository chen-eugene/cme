<template>
    <div class="project-detail">
        <div>
            <div class="title">{{news.articleName}}</div>
            <div class="label">
                <span class="visit-count">访问数：{{news.visits}}</span>
                <span class="publish-time">发布时间：{{news.publishTime}}</span>
            </div>
            <div class="content" v-html="news.content"></div>
        </div>
    </div>
</template>
<script>
    import axios from '../../assets/axios'

    export default {
        name: 'project-detail',

        data() {
            return {
                news: {}
            }
        },
        methods: {
            async queryDetail() {
                const res = await axios.get(`api/article/detail?articleId=${this.$route.params.articleId}`);
                this.news = res.data
            },
        },
        mounted() {
            this.queryDetail()
        }
    }
</script>
<style lang="less">
    .project-detail {
        padding: 30px 80px;
        text-align: center;

        .title {
            text-align: center;
            font-size: 24px;
            font-weight: bold;
        }

        .label {
            margin-top: 10px;

            .visit-count, .publish-time {
                font-size: 12px;
                color: #999999;
                text-align: center;

                &.publish-time {
                    margin-left: 20px;
                }
            }

        }

        .content {
            margin-top: 50px;

            img {
                max-width: 900px;
            }
        }

    }
</style>
