
<template>
  <div id="app">
    <transition name="el-fade-in" mode="out-in">
      <router-view></router-view>
    </transition>  
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
  body{
    margin: 0px;
	  padding: 0px;
  }
</style>
