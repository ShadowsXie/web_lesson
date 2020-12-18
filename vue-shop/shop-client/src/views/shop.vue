<template>
  <div class="shop">
    <v-header :title="'商品首页'" @value="onValueChange"></v-header>
    <div class="shop-container">
      <van-card
        v-for="(items, index) in shop" 
        :key = 'index'
        :price= items.shopPrice 
        :desc= items.remark
        :title= items.shopName
        thumb= ''
      >
        <template #footer>
          <van-button size="normal" @click="showDetail">详情</van-button>
        </template>
      </van-card>
      <div class="hasShop" v-if="!shop.length">
        暂无商品
      </div>
      <div style="width: 100%; height: 200px"></div>
    </div>
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :hide-stock="sku.hide_stock"
    />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  data() {
    return {
      arrays: [1, 2],
      show: false,
      sku: {
        tree: [],
        price: '', // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        picture: 'https://img.yzcdn.cn/1.jpg'
      },
      shop: []
    }
  },
  mounted() {
    this.getShops()
  },
  methods: {
    getShops() {
      this.$http.getShops().then((res) => {
        console.log(res);
        this.shop = res.data
      })
    },
    showDetail() {
      this.show = true
    },
    onValueChange(e) {
      console.log(e);
    }
  },
  components: {
    'v-header': Header
  }
}
</script>

<style lang="less" scoped>
  .shop-header {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background-color: #656565;
  }
  .shop {
    overflow: hidden;
  }
  .shop-container {
    overflow-y: scroll;
    height: 100vh;

    .hasShop {
      font-size: 15px;
      width: 100%;
      margin-top: 50%;
      text-align: center;
    }
  }
</style>