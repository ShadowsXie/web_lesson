<template>
  <div class="about">
    <User :userName="name" @animalChange="updateTitle"></User>
    <Animal :babyName="baby"></Animal>
  </div>
</template>

<script>
import User from '@/components/User'
import Animal from '@/components/Animal'
export default {
  data() {
    return {
      name: '瓜牛',
      baby: undefined
    }
  },
  components: {
    User,
    Animal
  },
  methods: {
    updateTitle(animal) {
      console.log(animal)
      this.baby = animal
    }
  }
}
</script>

<style>
  .about{
    color: red
  }
</style>