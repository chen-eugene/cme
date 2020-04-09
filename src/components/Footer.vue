<template>
    <div class="cme-footer">
        <p class="company">重庆机电控股(集团)公司</p>
        <p class="address">地址：重庆市北部新区黄山大道中段60号 邮编：401123 电话：023-63075670 传真：023-63075679 邮箱：office@cme-cq.com</p>
        <p class="right">2014-2015 © 重庆机电控股（集团）公司 版权所有 渝ICP备12001980号-1</p>
        <p class="customer-service">技术支持：中国政企网</p>
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
        height: 195px;
        width: 100%;
        background-color: white;
        border-top: 5px solid #1575be;
        padding-top: 40px;

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
