<template>
  <div class="login">
      <h2>旅梦后台管理系统</h2>
      <div class="login-wrapper">
          <p class="input">
              <el-input v-model="user" placeholder="请输入账号"></el-input>
          </p>
          <p class="input">
               <el-input v-model="password" placeholder="请输入密码"></el-input>
          </p>
          <p class="btn">
              <el-button type="primary" round @click="login">登录</el-button>
          </p>        
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
        user: '',
        password: ''
      }
    },
    methods: {
        login() {
            if (!this.user || !this.password) {
                this.$message.error('账号或密码不能为空');
            } else {
                 this.$router.push({ name: 'Home', params: {userName: this.user}})
            }
        }
    }
}
</script>
    
<style scoped>
    .login{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        background: aquamarine;
    }
    .login-wrapper{
        margin-top: 30px;
        width: 250px;

    }
    .input{
        margin-bottom: 20px;
    }
    .btn button{
        width: 100%;
    }
</style>