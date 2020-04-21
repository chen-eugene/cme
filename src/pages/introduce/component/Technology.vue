<template>
    <div id="technology">
        <viewer :images="previewImages">
            <img class="item" v-for="src in previewImages" :key="src" :src="src">
        </viewer>
    </div>
</template>

<script>
    import axios from '../../../assets/axios'

    export default {
        name: "Technology",
        data() {
            return {
                list: [],
                previewImages: []
            }
        },
        methods: {
            async query() {
                const res = await axios.get(`api/resource/list?categoryId=22`);
                this.list = res.data;
                this.list.forEach((item) => {
                    this.previewImages.push(item.resourceLink);
                })
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
    #technology {
        margin: 0 auto;
        width: 1024px;

        .item {
            margin: 20px;
            cursor: pointer;
            position: relative;
            width: 300px;
            /*height: 200px;*/
            text-align: center;
            display: inline-block;
            /*border: 1px solid #e7e7e7;*/

            .coverImage {
                width: 300px;
                /*height: 200px;*/
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
