import Vue from 'vue'

const app = new Vue({
  template: '<div>{{name}}</div>',
  data () {
    return {
      fristname: 'Li',
      lastname: 'Ming'
    }
  },
  // 计算属性
  // 可以提高应用性能
  // 部分计算所得值会放在缓存中
  // 他所依赖的值更新会触发其更新
  // 在computed中不要修改原先的值
  computed: {
    name () {
      return `${this.fristname} ${this.lastname}`
    }
  },
  // 监听组件中某些行为
  watch: {
    // TODO
  }
})

app.$mount('#app')
