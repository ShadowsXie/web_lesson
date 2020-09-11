<template>
  <v-scroll ref="suggest" class="suggest">
    <ul class="suggest-list">
      <li class="suggest-item">
        <div class="icon">
          <i class="iconfont">&#xe60b;</i>
        </div>
        <div class="name">
          <p class="text">有何不可</p>
        </div>
      </li>
    </ul>
  </v-scroll>
</template>

<script>
import scroll from '@/components/scroll'

export default {
  components: {
    'v-scroll': scroll
  }
}
</script>

<style scoped lang="stylus">
@import "../assets/css/function.styl"
.suggest 
  height 100%
  overflow hidden

  .suggest-list 
    padding 0 px2rem(60px)

    .suggest-item 
      display flex
      align-items center
      line-height px2rem(80px)
    

    .icon 
      flex 0 0 px2rem(60px)
      width px2rem(60px)
      font-size 14px
      color hsla(0,0%,100%,.3)
    

    .name 
      flex 1
      font-size 14px
      color hsla(0,0%,100%,.3)
      overflow hidden

      .text 
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
      
    
    .loading-wraper 
      height px2rem(80px)
    
  
  

  .no-result-wrapper 
    position absolute
    width 100%
    top 50%
    transform translateY(-50%)
    span 
      font-size 14px
      color hsla(0,0%,100%,.3)
    
  

</style>
