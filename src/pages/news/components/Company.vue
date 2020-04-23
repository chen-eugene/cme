<template>
    <div id="composite">
        <div v-for="item in news" :key="item.articleId" class="item" @click="gotoDetail(item)">
            <div class="title">
                {{item.articleName}}
            </div>
            <div class="time">
                {{item.publishTime}}
            </div>
        </div>

        <ms-pagination
                class="pagination"
                :btn-text="btnTextOption"
                :page-count="total"
                :page-size="pageSize"
                @current-change="currentChange"></ms-pagination>
    </div>
</template>

<script>
    import axios from '../../../assets/axios'

    export default {
        name: "Composite",
        data() {
            return {
                pageSize: 15,
                pageNum: 1,
                total: 1,
                news: [],
                btnTextOption: {
                    first: '首页',
                    last: '尾页',
                    prev: '上一页',
                    next: '下一页'
                }
            }
        },
        methods: {
            async queryNews(num) {
                const res = await axios.get(`api/article/list?subCategoryId=${this.$route.params.categoryId}&pageSize=15&pageNum=${num}`)
                this.total = res.data.total;
                this.news = res.data.row;
            },
            gotoDetail(article) {
                this.$router.push(`/detail/${article.articleId}`);
            },
            currentChange(pageNum) {
                this.queryNews(pageNum)
            }
        },
        mounted() {
            this.queryNews(this.pageNum)
        }
    }
</script>

<style scoped lang="less">
    #composite {
        text-align: center;

        .item {
            margin: 10px 30px;
            cursor: pointer;
            text-align: left;

            div {
                display: inline-block;
                font-size: 14px;


                &.time {
                    float: right;
                    font-size: 10px;
                    color: gray;
                }

            }

        }

        .pagination {
            display: inline-block;
            margin-top: 50px;
            text-align: center;
        }

    }
</style>
