<template>
  <div class="login-container">
    <img class="logo" src="@/assets/logo.png" />

    <van-cell-group class="box">
      <van-field 
        v-model="userId" 
        label="用户名" 
        placeholder="请输入用户名" 
        left-icon="user-o"/>

      <van-field 
        v-model="password"
        label="密码" 
        type="password"
        placeholder="请输入密码" 
        left-icon="setting-o"/>

      <van-field
        v-if="hasUserId" 
        v-model="rePassword" 
        label="确认密码"
        type="password" 
        placeholder="请输入密码" 
        left-icon="setting-o"/>
    </van-cell-group>

    <van-row>
      <van-button type="default" size="small" @click="clickRegister">
        {{ isLogin ? "注 册" : "已有账号" }}
      </van-button>

      <van-button
        type="primary"
        class="btn-login"
        size="small"
        @click="clickLogin"
      >
        {{ isLogin ? "登 录" : "注册并登录" }}
      </van-button>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true,
      hasUserId: false,
      userId: '',
      password: '',
      rePassword: ''
    }
  },
  methods: {
    clickRegister() {
      this.hasUserId = !this.hasUserId
      this.isLogin = !this.isLogin
    },
    clickLogin() {
      if (this.userId.trim() === '' || this.password.trim() === '') {
        this.$toast.fail('用户名或密码不能为空!')
        return
      }
      if (this.isLogin) {
        this.showLoginTip('登陆中')
        this.login()
      }
    },
    login() {
      // this.$http
      // .login({
      //   account: this.account,
      //   password: this.password
      // })
      // .then( res => {
      //   console.log(res);
      //   this.$toast.clear()
      //   // 存数据
      //   this.setUserInfo(res.data)
      //   this.$router.push('/home')
      // })
      this.$toast.clear()
      this.$router.push('/home')
    },
    showLoginTip(status) {
      this.$toast.loading({
        message: status,
        forbidClick: true,
        loadingType: 'spinner',
        duration: 0
      })
    },
  }
}
</script>

<style lang="less" scoped>
  .login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: '@/assets/login-bgm.jpg';

  .logo {
    width: 300px;
    margin: 100px 0 20px;
  }

  .box {
    width: 280px;
    margin-bottom: 20px;
  }

  .btn-login {
    margin-left: 20px;
  }
}
</style>