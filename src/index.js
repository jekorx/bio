import Vue from 'vue'
import App from '@/app.vue'

import '@styles/global'

const root = document.getElementById('root')

new Vue({
  render: h => h(App)
}).$mount(root)

/**
 * 函数节流方法
 * @param Function fn 延时调用函数
 * @param Number delay 延迟多长时间
 * @param Number atleast 至少多长时间触发一次
 * @return Function 延迟执行的方法
 */
const throttle = function (fn, delay, atleast) {
  let timer
  let previous
  return function () {
    let now = +new Date()
    if (!previous) previous = now
    if (now - previous > atleast) {
      fn()
      // 重置上一次开始时间为本次结束时间
      previous = now
    } else {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn()
      }, delay)
    }
  }
}

// 浏览器尺寸变化时刷新界面，重新渲染图表等
window.onresize = throttle(() => {
  location.reload()
}, 1000, 2000)
