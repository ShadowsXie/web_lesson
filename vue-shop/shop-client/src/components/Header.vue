<template>
  <div class="header-container">
    <van-nav-bar
      :title="title"
      left-arrow
      @click-left="goBack"
    />
    <van-search
      v-if="isShop"
      v-model="value"
      shape="round"
      background="#D3D3D3"
      placeholder="请输入搜索关键词"
    />
  </div>

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '商品首页'
    }
  },
  mounted() {
    if (this.title === '商品首页') {
      this.isShop = true
    } else {
      this.isShop = false
    }
  },
  data() {
    return {
      value: '',
      isShop: 'false'
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
  .header-container {
    background-color: #D3D3D3;
    .van-nav-bar{
      &::after{
        border-bottom: none;
      }
    } 
}
</style>