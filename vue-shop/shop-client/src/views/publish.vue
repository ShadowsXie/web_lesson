<template>
  <div>
    <v-header :title="title"></v-header>
    <div class="pub-container">
      <div class="message">
        <div class="icon"><van-icon name="volume-o" size="20"/> </div>
        <p>请完善商品相关信息后点击发布：</p>
      </div>
        <van-field
          v-model="shopName"
          name="shopName"
          label="商品名称："
          placeholder="商品名称"
        />
        <van-field
          v-model="shopPrice"
          name="shopPrice"
          label="商品价格："
          placeholder="商品价格"
        />
        <van-field
          v-model="place"
          name="place"
          label="交易地点："
          placeholder="交易地点"
        />
        <van-field
          v-model="telephone"
          name="telephone"
          label="联系电话："
          placeholder="联系电话"
          :rules="[{pattern, message: '请输入正确手机号'}]"
        />
        <van-field
          v-model="QQ"
          name="QQ"
          label="QQ："
          placeholder="QQ账号"
        />
        <van-field
          v-model="remark"
          name="remark"
          label="留言："
          placeholder="留言"
        />
        <van-field name="shopImg" label="商品图片展示">
          <template #input>
            <van-uploader v-model="shopImg" :after-read="afterRead" :max-count="2"/>
          </template>
        </van-field>
        <div style="margin: 16px;">
          <van-button round block type="info" @click="submit">
            提交
          </van-button>
        </div>
      <div style="width: 100%; height: 100px"></div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import store from '@/store/index.js'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      title: '发布商品',
      shopName: '',
      shopPrice: '',
      place: '',
      telephone: '',
      QQ: '',
      remark: '',
      shopImg: [],
      pattern: /^1[3456789]\d{9}$/,
      data: {},
    }
  },
  store,
  components: {
    'v-header': Header
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    submit() {
      this.data.shopName = this.shopName
      this.data.shopPrice = this.shopPrice
      this.data.place = this.place
      this.data.telephone = this.telephone
      this.data.QQ = this.QQ
      this.data.remark = this.remark
      this.data.shopImg = this.shopImg
      this.data.publisherName = this.user.accountNum
      this.data.school = this.user.school
      if (this.shopName === '') {
        this.$toast.fail('商品名不能为空')
      } else if (this.shopPrice === '') {
        this.$toast.fail('商品价格不能为空')
      } else {
        this.$http.publishShop(this.data).then((res) => {
          if(res.code === 0) {
            this.$toast.success('发布失败！')
          } else {
            this.$toast.success('发布成功！')
          }
        })
        console.log(this.data);
        this.shopName = ''
        this.shopPrice = ''
        this.place = ''
        this.telephone = ''
        this.QQ = ''
        this.remark = ''
        this.shopImg = []
      }
    },
    afterRead(file) {
      console.log(file);
      let formdata = new FormData()
      // formdata.append("name", file.file.name)
      // formdata.append("name", file.file.name)
      formdata.append("file", file.file)
      // console.log(formdata.getAll('file'));
      // this.$http.uploadFile(formdata).then((res) => {
      //   console.log(res);
      // })
      this.$http.uploadFile('/uploadFile', formdata)
      // console.log(this.shopImg);
    }
  },
}
</script>

<style lang="less" scoped>
  .pub-container {
    overflow-y: scroll;
    height: 100vh;
    .message {
    font-size: 15px;
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    .icon {
      margin-top: 5px;
    }
    p {
      margin-left: 10px;
    }
  }
  }
  
</style>