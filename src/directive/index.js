import Vue from 'vue'

// 其他的指令直接去卡vue官网,讲的非常详细

const app = new Vue({
  template: `
    <div :class="class">{{neme}}</div>
  `,
  data () {
    return {
      name: 'directive',
      class: 'style'
    }
  }
})

app.$mount('#app')
