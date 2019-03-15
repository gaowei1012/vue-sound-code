
import Vue from 'vue'

const app = new Vue({
  template: `
    <div v-show="isActive">
      <ul>
        <li v-for="(item, index) in data" :key="index">{{item}}</li>
      </ul>
      <span v-html="html"></span>
      <p :class="name">name</p>
      <p @click="handleClick">点我</p>
      <p :class="{active: isActive}">我显示了</p>
    </div>
  `,
  data () {
    return {
      isActive: true,
      data: [1, 2, 3, 4],
      html: '<a href="">hello</a>',
      name: 'bing'
    }
  },
  methods: {
    handleClick () {
      console.log('我被点了')
    }
  }
})

app.$mount('#app')
