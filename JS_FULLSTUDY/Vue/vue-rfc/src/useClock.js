import { onMounted, computed, ref } from 'vue'
// d = new Data()
// onMounted setinterval
// computed
// 返回计算完之后的值
// 3.0 动态路由 router.addRouter() removeRouter
// loading开 请求 loading关
export default function useClock() {
  const d = ref(new Date())
  onMounted(() => {setInterval(() => {
    d.value = new Date()
  }, 1000)})
  const timerStr = computed(() => {
    const arr = ['星期天','星期一', '星期二','星期三','星期四','星期五','星期六']
    let week = arr[d.value.getDay()]
    return week + d.value.toLocaleTimeString()
  })
  return timerStr
}
