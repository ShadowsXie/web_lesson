<template>
  <!-- fragment -->
  <ul>
    <FragmentDemo :data="[5, 3, 1, 8, 9, 10]" />
    <hr />
    <TeleportDemo />
    <hr />
    <!-- <AsyncComponent /> -->
    <Suspense>
      <template #default>
        <AsyncComponent :timeout="3000" />
      </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
  </ul>
</template>

<script>
import FragmentDemo from './fragment.vue'
import TeleportDemo from './teleport.vue'
import AsyncComponent from './suspense.vue'
import Loading from './loading.vue'
export default {
  components: {
    FragmentDemo,
    TeleportDemo,
    AsyncComponent,
    Loading
  }
}
</script>

<style>

</style>