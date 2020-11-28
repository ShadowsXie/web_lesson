<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld @getData="getDataFromSon" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    getDataFromSon(data) {
      console.log(data);
    }
  },
  beforeCreate() {
    console.log('App beforeCreate');
  },
  created() {
    console.log('App created');
  },
  beforeMount() {
    console.log('App beforeMounted');
  },
  mounted() {
    console.log('App mounted');
  } 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
