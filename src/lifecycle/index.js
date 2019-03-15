import Vue from 'vue'

const app = new Vue({
  template: '<div>{{test}}</div>',
  data: () => {
    return {
      test: 'life cycle'
    }
  },
  // 初始化完成显示
  beforeCreate () {
    console.log(this.$el, 'beforeCreate ')
  },
  created () {
    console.log(this.$el, 'created  ')
  },
  // 组件挂载到页面的
  // 在服务端渲染是不会调用的，没有DOM
  beforeMount () {
    console.log(this.$el, 'beforeMount  ')
  },
  mounted () {
    console.log(this.$el, 'mounted  ')
  },
  // 数据跟新时显示
  beforeUpdate () {
    console.log(this, 'beforeUpdate  ')
  },
  updated () {
    console.log(this, 'updated  ')
  },
  //
  activated () {
    console.log(this, 'activated  ')
  },
  deactivated () {
    console.log(this, 'deactivated')
  },
  // 组件销毁时调用 $destory()， 一般销毁定时器等任务
  beforeDestroy () {
    console.log(this, 'beforeDestory')
  },
  destroyed () {
    console.log(this, 'destory')
  },
  // eslint-disable-next-line vue/require-render-return
  render () {
    console.log('render function')
  },
  // 开发时调用, 可以用作调试代码
  // 只会在当前组件出错是才会被调用
  renderError () {
    // TODO
  },
  // 可以在线上使用
  // 会向上冒泡
  errorCaptured () {
    // TODO
  }
})

app.$mount('#app')
