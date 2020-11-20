<template>
  <div id="app">
    <Com></Com>
  </div>
</template>

<script>
import Com from './Com.vue'
export default {
  components: {
    Com
  },
  beforeCreate() {
    // node 里面输出
    // 组件在服务器端调用
    console.log(111111);
  },
  mounted() {
    // 在 node 端没有 $mount() 所以不会被调用
    console.log(222);
  }
}
</script>

<style>

</style>