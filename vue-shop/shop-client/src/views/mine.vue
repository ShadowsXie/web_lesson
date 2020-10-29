<template>
  <div>
    <van-button @click="quit">退出</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    quit() {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>