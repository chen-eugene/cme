<template>
    <div class="contactus">
        <h3 class="title">重庆机电智能制造</h3>

        <div class="item address">地址(Add)：重庆市南岸区江溪路6号</div>

        <div class="item phone">电话（Tel）:</div>

        <div class="item phone">
            <a href="tel: 023-62770078">+86-(0)23-62770078市场部；</a>
        </div>

        <div class="item phone">
            <a href="tel: 023-62770132">+86-(0)23-62770132综合部；</a>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'contact',
        data() {
            return {
            }
        },
        methods: {
        },

    }
</script>
<style lang="less">
    .contactus {
        width: 100%;
        background: #FFFFFF;

        .title {
            font-size: 20px;
            color: #0081bc;
            font-weight: bold;
        }

        .item {
            font-size: 16px;
            line-height: 2em;
            margin: 15px 0;

            a {
                color: unset;
                text-decoration: none;
                
                &:hover {
                    color: #0081bc;
                }
            }
        }
    }
</style>
