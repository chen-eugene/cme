<template>
    <div id="app">
        <c-header></c-header>
        <div class="content">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <c-footer id="footer"></c-footer>
    </div>
</template>

<script>
    import CHeader from './components/Header'
    import CFooter from './components/Footer'

    export default {
        name: 'app',

        components: {
            CHeader,
            CFooter
        }
    }
</script>

<style lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        min-height: 100vh;
        background-color: #F5F5F5;

        > .content {
            width: 100%;
            min-height: 665px;
        }

        > #footer {
            width: 100%;
            min-height: 200px;
        }
    }

    body, html, p {
        padding: 0;
        margin: 0;
    }

    .clearfix {
        zoom: 0;
        overflow: hidden;
    }

    .clearfix::after, .clearfix::before {
        content: '';
        display: table;
        clear: both;
    }

    * {
        vertical-align: top;
        box-sizing: border-box;
    }
</style>
