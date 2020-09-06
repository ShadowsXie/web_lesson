<template>
  <div class="comment-top">
    <div class="comment-left">
      <h2 class="score">4.2</h2>
      <div class="text">综合评分</div>
      <div class="rankRate">高于周边商家62.9%</div>
    </div>
    <div></div>
    <div class="comment-right">
      <div class="score-desc">
        <span class="title">服务态度</span>
        <div class="star">
          <v-star :score="seller.serviceScore" :size="36"></v-star>
        </div> 
        <span class="score">{{seller.serviceScore}}</span>
      </div>
      <div class="score-desc">
        <span class="title">商品评分</span>
        <div class="star">
          <v-star :score="seller.foodScore" :size="36"></v-star>
        </div> 
        <span class="score">{{seller.foodScore}}</span>
      </div>
      <div class="score-desc">
        <span class="title">送达时间</span>
        <span class="time">{{seller.deliveryTime}}分钟</span>
      </div>
    </div>
  </div>
</template>

<script>
import VStar from '@/components/v-star/v-star'
export default {
  props: {
    seller: {
      type: Object,
      default: {}
    }
  },
  created() {
    console.log(this.seller)
  },
  components:{
     VStar
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl';
.comment-top
  display flex
  padding 18px 0
  .comment-left
    display flex
    flex-direction column
    border-right: 1px solid #d9dde1
    flex: 0 0 137px
    padding: 6px 0
    text-align: center
    width: 137px
    .score
      color: #fc9153
      font-size: 24px
      line-height: 28px
      margin-bottom: 6px
    .text
      color: $color-dark-grey
      font-size: 12px
      line-height: 12px
      margin-bottom: 8px
    .rankRate
      color: $color-light-grey
      font-size: 10px
      line-height: 10px
  .comment-right
    flex 1
    padding: 6px 0 6px 24px
    .score-desc
      align-items center
      display flex
      margin-bottom 8px
      .title
        color: $color-dark-grey;
        font-size: 12px;
        line-height: 18px;
      .score
        color: $color-orange;
        font-size: 12px;
        line-height: 18px;
      .time
        color: $color-light-grey;
        font-size: 12px;
        margin-left: 12px;
      .star
        margin 0 12px
</style>