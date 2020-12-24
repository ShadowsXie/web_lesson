// extend
// let Component = Vue.extend({
//   template: '<div>test</div>'
// })

// new Component.$mount('#app')


// mixin mixins 的区别
Vue.mixin({
  beforeCreate() {
    // ...
    // 这种方式会影响到每一个组件的 beforeCreate 函数
  }
})


// computed watch的区别
// computed 会有缓存
// computed: {
//   newVal() {
//     return this.val + 2
//   }
// }

vm.$watch('obj', {
  handle: function(val, oldval) {

  },
  deep: true,   //深层遍历对象
  immediate:true
})