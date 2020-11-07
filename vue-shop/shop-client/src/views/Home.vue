<template>
  <div>
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item replace to="/home/shop" icon="home-o">
        商品
      </van-tabbar-item>
      <van-tabbar-item replace to="/home/publish" icon="upgrade">
        发布
      </van-tabbar-item>
      <van-tabbar-item replace to="/home/mine" icon="contact">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>