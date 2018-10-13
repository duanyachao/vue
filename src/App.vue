
<template>
  <div id="app">
    <el-button type="warning">22222</el-button>
    <el-button type="warning">222222222222</el-button>
    <div class="nav">
      <ul>
          <li><router-link to="/">登录</router-link></li>
          <li><router-link to="/main">首页</router-link></li>
        </ul>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
