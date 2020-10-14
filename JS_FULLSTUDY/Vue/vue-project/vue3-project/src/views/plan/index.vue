<template>
  <div>
    <create @handlePlan="handlePlan"></create>
  </div>
</template>

<script>
import Create from './create'
export default {
  components: {
    Create
  },
  setup() {
    const handlePlan = (plan) => {
      
    }

    return {
      handlePlan
    }
  }
}
</script>

<style>

</style>