import Vue from 'vue'
import Instance from './instance.vue'

// eslint-disable-next-line no-new
const app = new Vue({
  components: { Instance },
  template: '<Instance />',
  data: {
    text: 'hello'
  },
  props: {
    username: {
      type: String,
      default: ''
    }
  },
  watch: {

  }
})

app.$mount('#app')

// 实例

// console.log(app.$data)

// console.log(app.$props)

// console.log(app.$el)

// console.log(app.$attrs)

// console.log(app.$options.render (h) => { return { h('div', {}, 'new render function') } })

// 每个组件中都可以调用
// console.log(app.$root)

// console.log(app.$children)

// 插槽 slots
// console.log(app.$slots)
// console.log(app.$scopedSlots)

// console.log(app.$refs)

// 在服务端调用 做判断
// console.log(app.$isServer)

// 方法

// console.log(app.$watch)

// 只能监听当前组件, 不冒泡
// app.$on('test', (a, b) => {
//   console.log('test')
// })

// app.$once 只会触发一次
// app.$once('test', (a, b) => {
//   console.log(`test ${a}:${b}`)
// })
// setInterval(() => {
//   app.$emit('test', 1, 2)
// }, 1000)

// 不加你使用
// app.$forceUpdate()

// vue 中是异步渲染，这样做的目的是更加高效的
// console.log(app.$nextTick())
