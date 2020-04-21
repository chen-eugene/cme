<template>
    <div class="cme-footer">
        <p class="address">地址：重庆市南岸区江溪路6号 电话：023-62770078 Email：yan.zhang@cme-im.com</p>
    </div>
</template>
<script>
    export default {
        name: 'cme-footer',

        data() {
            return {}
        }
    }
</script>
<style lang="less" scoped>

    .cme-footer {
        height: 80px;
        width: 100%;
        background-color: #083C70;
        /*background-color: rgba(8,60,112,1);*/
        padding-top: 126px;

        * {
            color: darkgray;
            font-size: 12px;
            text-align: center;
        }

        .customer-service:after {
            display: inline-block;
            content: '';
            background-image: url("https://icon.cnzz.com/img/2.gif");
            background-size: 30px 10px;
            width: 30px;
            height: 10px;
            vertical-align: middle;
            background-repeat: no-repeat;
            margin-left: 3px;
        }

    }
</style>
