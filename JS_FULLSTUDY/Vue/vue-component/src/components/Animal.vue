<template>
  <div class="animal">
      <p>的宠物: {{babyName}}</p>
  </div>
</template>

<script>
export default {
    props: {
        babyName: {
            type: String,
            default: '牛蛙'
        }
    },
    data() {
        return {
            baby: '蜗牛'
        }
    }
}
</script>

<style>

</style>