<template>
    <div id="honor">
        <div class="content">
            <div v-for="item in list" :key="item.resourceId" class="item" @click="gotoDetail(item)">
                <img class="coverImage" :src="item.resourceLink" alt=""/>
                <!--                <div class="name">{{item.resourceName}}</div>-->
            </div>
        </div>
    </div>
</template>

<script>
    import axios from '../../../assets/axios'

    export default {
        name: "Honor",
        data() {
            return {
                list: []
            }
        },
        methods: {
            async query() {
                const res = await axios.get(`api/resource/list?categoryId=21`);
                this.list = res.data
            },
            gotoDetail(item) {
                this.$router.push({
                    name: `IntroductionDetail`,
                    params: {
                        imageUrl: item.resourceLink
                    }
                })
            }
        },
        mounted() {
            this.query()
        }
    }
</script>

<style scoped lang="less">
    #honor {
        width: 1024px;
        margin: 0 auto;

        .item {
            margin: 20px;
            cursor: pointer;
            position: relative;
            width: 300px;
            text-align: center;
            display: inline-block;

            .coverImage {
                width: 300px;
            }

            .name {
                position: absolute;
                bottom: 0;
                background-color: rgba(0, 0, 0, .5);
                width: 300px;
                color: white;
                text-align: center;
            }

        }
    }
</style>
