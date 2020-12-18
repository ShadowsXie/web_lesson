<template>
  <div >
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
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  
</style>