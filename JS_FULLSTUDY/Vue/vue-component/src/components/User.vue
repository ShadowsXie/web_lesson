<template>
  <div class="user">
      <p>{{userName}}</p>
      <!-- <button @click="handle">按钮</button> -->
      <button @click="changeBaby">养新的宠物</button>
  </div>
</template>

<script>
export default {
    props: ['userName'],
    data() {
        return {
            name: '',
            title: '我是子组件的title',
            baby: '牛蜗'
        }
    },
    methods: {
        handle() {
            // console.log('121313')
            this.$emit('titleChange', this.title)
        },
        changeBaby() {
            this.$emit('animalChange', this.baby)
        }
    }
} 
</script>
<style>

</style>