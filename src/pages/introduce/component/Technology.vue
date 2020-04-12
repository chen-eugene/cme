<template>
    <div id="technology">
        <div v-for="item in list" :key="item.resourceId" class="item">
            <img class="coverImage" :src="item.resourceLink" alt=""/>
            <div class="name">{{item.resourceName}}</div>
        </div>
    </div>
</template>

<script>
    import axios from '../../../assets/axios'

    export default {
        name: "Technology",
        data() {
            return {
                list: []
            }
        },
        methods: {
            async query() {
                const res = await axios.get(`api/resource/list?categoryId=22`);
                this.list = res.data
            },
        },
        mounted() {
            this.query()
        }
    }
</script>

<style scoped lang="less">
    #technology {
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
                background-color: rgba(0, 0, 0, .5);
                width: 300px;
                color: white;
                text-align: center;
            }

        }
    }
</style>
