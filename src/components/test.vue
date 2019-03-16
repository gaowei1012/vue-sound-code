<template>
  <div>
    <p>这是组价注册</p>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      default: 'hello'
    },
    age: {
      type: Number,
      default: 0
    },
    email: {
      type: String,
      default: ''
    }
  },
  name: 'Test',
  data () {
    return {}
  }
}
</script>
