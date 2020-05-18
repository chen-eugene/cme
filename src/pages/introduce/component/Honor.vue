<template>
    <div id="honor">
        <viewer :images="previewImages">
<!--            <img class="item" v-for="src in previewImages" :key="src" :src="src">-->
            <div v-for="item in list" :key="item.resourceId" class="item">
                <img class="coverImage" :src="item.resourceLink" alt=""/>
                <div class="name">{{item.resourceName}}</div>
            </div>
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

            .coverImage {
                width: 300px;
                height: 200px;
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
