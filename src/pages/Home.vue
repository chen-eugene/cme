<template>
    <div class="home">
        <swiper :options="swiperOption" ref="mySwiper" class="banner">
            <swiper-slide v-for="(item, index) in banner" :key="index" class="banner-item">
                <img :src="item.image" alt="">
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
    export default {
        name: 'home',

        data () {
            return {
                swiperOption: {

                },
                banner: [
                    {
                        image: 'http://prod-wj-lingfen.oss-cn-beijing.aliyuncs.com/others/picture3.png',
                    }
                ]
            }
        }
    }
</script>
<style lang="less" scoped>
    .home {
        overflow: hidden;
        
        .banner {
            width: 100%;

            .banner-item {
                img {
                    width: 100%;
                }
            }
        }
    }
</style>