<template>
  <div id="app">
    <c-header></c-header>
    <div class="content">
      <router-view></router-view>
    </div>
    <c-footer></c-footer>
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
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #F1F1F1;

  >.content {
    width: 1190px;
    margin: 5px auto;
    background-color: #FFFFFF;
    min-height: 700px;
    box-shadow: 1px 1px 10px #ccc;
  }
}
body, html {
  padding: 0;
  margin: 0;
}
.clearfix {
  zoom: 0;
  overflow: hidden;
}
.clearfix::after, .clearfix::before {
  content: 0;
  display: table;
  clear: both;
}
</style>
