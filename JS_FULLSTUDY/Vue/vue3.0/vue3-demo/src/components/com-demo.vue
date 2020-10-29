<template>
  <!-- fragment -->
  <ul>
    <FragmentDemo :data="[5, 3, 1, 8, 9, 10]" />
  </ul>
</template>

<script>
import FragmentDemo from './fragment.vue'
export default {
  components: {
    FragmentDemo
  }
}
</script>

<style>

</style>