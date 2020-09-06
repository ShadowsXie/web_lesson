<template>
  <div class="star-container">
    <span v-for="(item, index) in starNum" :class="item"  :key="index"></span>
  </div>
</template>

<script>
export default {
  props: {
    score: {
      type: Number,
      default() {
        return 0
      }
    },
    size: {
      type: Number,
      default() {
        return 48
      }
    }
  },
  data() {
    return {
      fullStar: 0,
      halfStar: 0,
      noStar: 5,
      starNum: []
    }
  },
  methods: {
    starNums(score) {
      this.fullStar = Math.floor(score)
      if(score-this.fullStar >= 0.5){
        this.noStar = 1
        this.halfStar = 4-this.fullStar
      } else {
        this.noStar = 5-this.fullStar
      }
    },
    pushStar() {
      this.starNums(this.score)
      for(let i = 0; i < this.fullStar; i++){
        this.starNum.push(`fullStar icon-${this.size}`)
      }
      for(let i = 0; i < this.halfStar; i++){
        this.starNum.push(`halfStar icon-${this.size}`)
      }
      for(let i = 0; i < this.noStar; i++){
        this.starNum.push(`noStar icon-${this.size}`)
      }
    }
  },
  created() {
    setTimeout(() => {
      this.pushStar()
    }, 1000)  
  }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixin.styl";
.star-container
  align-items center
  display flex
  justify-content: center
  .fullStar.icon-48
    width 20px
    height 20px 
    background-size 20px 20px
    bg-image('star48_on')
    margin-right 22px
    &:last-child 
      margin-right 0
  .halfStar.icon-48
    width 20px
    height 20px 
    background-size 20px 20px
    bg-image('star48_half')
    margin-right 22px
    &:last-child 
      margin-right 0
  .noStar.icon-48
    width 20px
    height 20px
    background-size 20px 20px
    bg-image('star48_off')
    margin-right 22px
    &:last-child 
      margin-right 0
  .fullStar.icon-36
    width 15px
    height 15px 
    background-size 15px 15px
    bg-image('star48_on')
    margin-right 6px
    &:last-child 
      margin-right 0
  .halfStar.icon-36
    width 15px
    height 15px 
    background-size 15px 15px
    bg-image('star48_half')
    margin-right 6px
    &:last-child 
      margin-right 0
  .noStar.icon-36
    width 15px
    height 15px
    background-size 15px 15px
    bg-image('star48_off')
    margin-right 6px
    &:last-child 
      margin-right 0
</style>