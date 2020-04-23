<template>
    <div id="onoff">
        <div class="content">
            <div v-for="item in infos" :key="item.articleId" class="item" @click="gotoDetail(item)">
                <div class="picture" :style="{'background-image': `url(${item.coverImage})`}"></div>
                <div class="name">{{item.articleName}}</div>
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
        name: "OnOff",
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
                console.log(this.total)
                this.infos = res.data.row;
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
    #onoff {
        padding-bottom: 60px;
        text-align: center;

        .content {
            text-align: left;
            width: 1026px;
            margin: 0 auto;

            .item {
                margin: 20px;
                cursor: pointer;
                text-align: center;
                display: inline-block;
                box-sizing: content-box;
                transition: transform .5s ease;
                overflow: hidden;

                &:hover {
                    transform: translateY(-20px);
                    
                    .picture {
                        border: 2px solid #1575be;
                        background-size: 100%;
                    }

                    .name {
                        color: #1575be;
                    }
                }

                .picture {
                    width: 300px;
                    height: 200px;
                    background-size: 70%;
                    background-position: center center;
                    background-repeat: no-repeat;
                    transition: all .5s ease;
                    overflow: hidden;
                }

                .name {
                    width: 300px;
                    color: #333333;
                    text-align: center;
                    height: 40px;
                    line-height: 40px;
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
