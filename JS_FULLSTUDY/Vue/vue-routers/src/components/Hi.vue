<template>
  <div class="hello">
      <h1>{{msg}}</h1>
      <router-link :to="{name: 'hi1', params:{name: 'wn'}}">hi 一</router-link>
      <div style="display: inline-block; width: 50px"></div>
      <router-link to="/hi/hi2">hi 二</router-link>


       <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
      return {
        msg: 'Hi, I am wn'
      }
  }
}
</script>

<style>

</style>