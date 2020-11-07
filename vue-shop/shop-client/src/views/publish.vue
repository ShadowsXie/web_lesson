<template>
  <div>
    <v-header :title="title"></v-header>
    <div class="message">
      <div class="icon"><van-icon name="volume-o" size="20"/> </div>
      <p>请完善商品相关信息后点击发布：</p>
    </div>
    <van-form @submit="onSubmit">
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
      <van-field name="uploader" label="商品图片展示">
        <template #input>
          <van-uploader v-model="uploader" :after-read="afterRead"/>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
  </van-form>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
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
      uploader: [
        // {
        //   url: 'https://img.yzcdn.cn/vant/leaf.jpg',
        //   status: 'uploading',
        //   message: '上传中...',
        // },
        // {
        //   url: 'https://img.yzcdn.cn/vant/tree.jpg',
        //   status: 'failed',
        //   message: '上传失败',
        // },
      ]
    }
  },
  components: {
    'v-header': Header
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    afterRead(file) {
      console.log(file);
    //   file.status = 'uploading';
    //   file.message = '上传中...';

    //   setTimeout(() => {
    //     file.status = 'failed';
    //     file.message = '上传失败';
    //   }, 1000);
    }
  },
}
</script>

<style lang="less" scoped>
  .message {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
    .icon {
      margin-top: 5px;
    }
    p {
      margin-left: 10px;
    }
  }
</style>