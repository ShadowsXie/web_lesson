<template>
  <div>
    <v-header :title="title"></v-header>
    <div class="info-container" @click="setInfo">
      <div class="avator">
        <img src="../assets/avator.jpg">
      </div>
      <div class="txt-container">
        <div class="nickname">
          <p>姓名：{{userName}}</p>
        </div>
        <div class="school">
          <p>学校：{{school}}</p>
        </div>
      </div>
    </div>

    <div style="width: 100%; height: 20px; background-color:#F8F8FF"></div>

    <van-cell-group>
      <van-cell title="我购买的" is-link @click="gotoPuchase"/>
      <van-cell title="我的收藏" is-link/>
      <van-cell title="我的余额" is-link/>
      <van-cell title="我的商品" is-link/>
      <van-cell title="单元格" is-link/>
      <van-cell title="单元格" is-link/>
    </van-cell-group>


    <div style="width: 100%; height: 50px; background-color:#F8F8FF"></div>

    <div class="button">
      <van-button @click="quit" type="danger" size="large">退出登录</van-button>
    </div>

    <MineInfo class="settingInfo" v-if="ifEdit"/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import MineInfo from '../components/MineInfo.vue'
export default {
  data() {
    return {
      title: '我的',
      school: '北京大学',
      show: false,
      userName: '张三',
      ifEdit: false
    }
  },
  methods: {
    quit() {
      this.$router.push('/')
    },
    gotoPuchase() {
      this.$toast.loading({
        message: status,
        forbidClick: true,
        loadingType: 'spinner',
        duration: 0
      })
    },
    setInfo() {
      this.ifEdit = true
    },
  },
  components: {
    'v-header': Header,
    'MineInfo': MineInfo
  }
}
</script>

<style lang="less" scoped>
  .info-container {
    font-size: 15px;
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

  .settingInfo {
    border-radius: 20px;
    background-color: #fff;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 100;
    overflow: hidden;
  }
</style>