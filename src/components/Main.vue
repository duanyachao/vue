<template>
  <div class="home">
    <h1>刚才计数器显示的值为:{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: this.$store.state.count
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul li {
  border-bottom: 1px solid #999;
  padding: 10px 0;
}

.inl-block {
  display: inline-block;
}
.m-content {
  margin-left: 20px;
}
</style>
