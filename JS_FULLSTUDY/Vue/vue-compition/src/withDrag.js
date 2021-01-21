import { defineComponent, h } from 'vue'
// html css js .vue webpack 里面的 vue-loader 打包成js
// <template>
// <div class="cls">123</div>
// </template>
// 比如说 template 被打包成 h('div', {class: 'cls'}, '123')
// h 被调用
// div 节点就被创建出来了
// 拖拽的行为
// 什么东西需要拖拽 div p h2
export default function(Com) {
  console.log(Com);
  // 第二个参数 script 中间的那一段
  return defineComponent({
    // render 返回就是 该组件需要渲染的
    render() {
      // return h('h3', {}, ['hhh'])
      // return <h3>hhh</h3>
      // vue react(函数式) angular(响应式)
    return h('div', { 
      "onTouchMove": this.handleMove,
      style: [
        {position: 'absolute'},
        {left: `${this.x}px`} ,
        {top: `${this.y}px`}
      ]
    }, [ h(Com) ])
    },
    data() {
      return {
        x: 0, y: 0
      }
    },
    methods: {
      handleMove(e) {
        const x = e.touches[0].pageX;
        const y = e.touches[0].pageY;
        this.x = x
        this.y = y
      }
    }
  })
}