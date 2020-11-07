<template>
  <div>
    <v-header :title="title"></v-header>
    <div class="info-container">
      <div class="avator">
        <img src="../assets/avator.jpg">
      </div>
      <div class="txt-container">
        <div class="nickname">
          <p>姓名：张三</p>
        </div>
        <div class="school">
          <p>学校：江西财经大学</p>
        </div>
      </div>
    </div>
    <div style="width: 100%; height: 30px; background-color:#F8F8FF"></div>

    <van-cell-group>
      <van-cell title="我购买的" is-link/>
      <van-cell title="我的收藏" is-link/>
      <van-cell title="我的余额" is-link/>
      <van-cell title="我的商品" is-link/>
      <van-cell title="单元格" is-link/>
      <van-cell title="单元格" is-link/>
    </van-cell-group>


    <div style="width: 100%; height: 80px; background-color:#F8F8FF"></div>

    <div class="button">
      <van-button @click="quit" type="danger" size="large">退出登录</van-button>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  data() {
    return {
      title: '我的'
    }
  },
  methods: {
    quit() {
      this.$router.push('/')
    }
  },
  components: {
    'v-header': Header
  }
}
</script>

<style lang="less" scoped>
  .info-container {
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 20px;
    margin-right: 20px;

    .avator {
      width: 50px;
      height: 50px;
      overflow: hidden;
      border-radius: 50px;

      img {
        width: 100%;
        height: 100px;
      }
    }

    .txt-container {
      margin-left: 15px;

      .school {
        margin-top: 5px;
      }
    }
  }

  .button {
    margin-right: 15px;
    margin-left: 15px;
  }
</style>