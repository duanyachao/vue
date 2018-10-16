<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <p>
    <el-button type="warning" @click="increment">+</el-button>
    <el-button type="info" @click="decrement">-</el-button>
  </p>
  </div>
</template>
<script>
// export default {
//   name: 'Login',
//   computed: {
//     count () {
//       return this.$store.state.count
//     }
//   },
//   methods: {
//     increment () {
//       this.$store.commit('increment')
//     },
//     decrement () {
//       this.$store.commit('decrement')
//     }
//   }
// }
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters([
    'count'
  ]),
  methods: mapActions([
    'increment',
    'decrement'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
