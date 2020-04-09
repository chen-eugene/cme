<template>
    <div id="companion">
        <div class="logos">
            <img v-for="(img,index) in companions" :src="img" :key="index" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Companion",
        data() {
            return {
                companions: [
                    'http://www.cme-cq.com/files/2014-09/2014092612351991809.jpg',
                    'http://www.cme-cq.com/files/2014-09/2014092612372343622.jpg',
                    'http://www.cme-cq.com/files/2014-09/2014092612374374214.jpg',
                    'http://www.cme-cq.com/files/2014-09/2014092612380511029.jpg',
                    'http://www.cme-cq.com/files/2017-09/20170914102533.png',
                    'http://www.cme-cq.com/files/2014-09/2014092612384854126.jpg',
                    'http://www.cme-cq.com/files/2014-09/2014092612401967712.jpg',
                    'http://www.cme-cq.com/files/2014-09/2014092612403678043.jpg',
                    'http://www.cme-cq.com/files/2014-09/2014092612405387757.jpg',
                    'http://www.cme-cq.com/files/2014-09/2014092612411412652.jpg',
                    'http://www.cme-cq.com/files/2014-09/2014092612413170917.jpg',
                    'http://www.cme-cq.com/files/2014-09/2014092612415184032.jpg',
                    'http://www.cme-cq.com/files/2014-09/2014092612423582352.jpg',
                    'http://www.cme-cq.com/files/2014-09/2014092612425540319.jpg',
                    'http://www.cme-cq.com/files/2014-09/2014092612431080856.jpg',
                    'http://www.cme-cq.com/files/2014-09/2014092612432738669.jpg',
                    'http://www.cme-cq.com/files/2014-09/2014092612434413743.jpg',
                    'http://www.cme-cq.com/files/2014-09/2014092612440649543.jpg',
                    'http://www.cme-cq.com/files/2014-09/2014092612442534869.jpg',
                    'http://www.cme-cq.com/files/2014-09/2014092612444223885.jpg',
                    'http://www.cme-cq.com/files/2014-09/2014092612450012826.jpg',
                    'http://www.cme-cq.com/files/2014-09/2014092612451819886.jpg',
                    'http://www.cme-cq.com/files/2014-09/2014092612454041745.jpg']
            }
        }
    }
</script>

<style scoped lang="less">
    #companion {
        margin: 25px 0;
        width: 100%;

        .logos {
            width: 960px;
            margin: 0 auto;

            img {
                width: 320px;
                height: 150px;
            }
        }

    }
</style>
