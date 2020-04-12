<template>
    <div id="weld">
        <div v-for="item in infos" :key="item.articleId" class="item" @click="gotoDetail(item)">
            <img class="coverImage" :src="item.coverImage" alt=""/>
            <div class="name">{{item.articleName}}</div>
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
        name: "weld",
        data() {
            return {
                pageSize: 15,
                pageNum: 1,
                total: 1,
                infos: [],
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
                this.infos = res.data.row;
            },
            gotoDetail(article) {
                this.$router.push({
                    name: `CaseDetail`,
                    params: {
                        articleId: article.articleId
                    }
                })
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
    #weld {
        padding-bottom: 60px;
        position: relative;

        .item {
            margin: 20px;
            cursor: pointer;
            position: relative;
            width: 300px;
            height: 200px;
            text-align: center;
            display: inline-block;
            border: 1px solid #e7e7e7;

            .coverImage {
                width: 300px;
                height: 200px;
            }

            .name {
                position: absolute;
                bottom: 0;
                background-color: rgba(0,0,0,.5);
                width: 300px;
                color: white;
                text-align: center;
            }

        }

        .pagination {
            /*background: #337ab7;*/
            /*position: fixed;*/
            /*float: right;*/
            position: absolute;
            bottom: 0;
            left: 400px
        }

    }
</style>
