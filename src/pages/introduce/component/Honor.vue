<template>
    <div id="honor">
        <viewer :images="previewImages">
            <img class="item" v-for="src in previewImages" :key="src" :src="src">
        </viewer>

    </div>
</template>

<script>
    import axios from '../../../assets/axios'

    export default {
        name: "Honor",
        data() {
            return {
                list: [],
                previewImages: []
            }
        },
        methods: {
            async query() {
                const res = await axios.get(`api/resource/list?categoryId=21`);
                console.dir(res);
                this.list = res.data;
                this.list.forEach((item) => {
                    this.previewImages.push(item.resourceLink);
                })
            },
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
        }
    }
</style>
