<template>
  <div class="detail">
      <h1>Computed 计算属性</h1>

      <div class="price">
          {{totalPrice}}块
      </div>

      <div class="news">
          <ul>
              <li v-for="(item, index) in reverseNews" :key="index">
                  {{item.title}}——{{item.date}}
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            price: 100,
            num: 4,
            news: [
                {title: '蜗牛酒后打死女友2岁儿子 法庭上忏悔:请再给次机会', date: '2020/08/24'},
                {title: '写在世界屋脊上的“中国奇迹” ——中央第六次西藏工作座谈会以来西藏发展纪实', date: '2020/08/25'},
                {title: '蜗牛为了特朗普，他可真不怕犯规和“打脸”', date: '2020/08/26'},
                {title: '袁隆平爷爷90岁生日前去理发', date: '2020/08/27'}
            ]
        }
    },
    computed: {
        totalPrice: function() {
            return this.price * this.num
        },
        reverseNews: function() {
            let news = this.news
            return news.reverse()
        }
    }
}
</script>

<style>
    .news{
        font-size: 20px;
    }
</style>