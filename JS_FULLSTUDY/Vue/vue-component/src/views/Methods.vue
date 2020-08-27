<template>
  <div class="methods">
      <p>{{count}}</p>
      <button @click="add">add</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        add(e) {
            this.count++
            console.log(e)
        }
    }
}
</script>

<style>

</style>