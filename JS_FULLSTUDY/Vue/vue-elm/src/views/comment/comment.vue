<template>
  <div class="comment">
    <div class="comment-top">
      <comment-top :seller="data"></comment-top>
    </div>
    <div class="split"></div>
    <div class="comment-desc"></div>
  </div>
</template>

<script>
import CommentTop from '@/components/comment-top/comment-top'
export default {
  props: {
     data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components:{
    CommentTop
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl';
  .split
    background: $color-brown;
    border-bottom: 1px solid rgba(7,17,27,.1);
    border-top: 1px solid rgba(7,17,27,.1);
    height: 16px;
    width: 100%;
</style>