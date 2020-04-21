<template>
    <div class="detail">
        <img :src="image" alt="">
    </div>
</template>

<script>
    export default {
        name: "detail",
        data() {
            return {
                image: ''
            }
        }
        ,mounted() {
            console.log('mounted')
            this.image = this.$route.params.imageUrl
        }
    }
</script>

<style scoped lang="less">
    .detail {
        padding: 30px 80px;
        text-align: center;

        img {
            width: 1200px;
        }


    }
</style>
