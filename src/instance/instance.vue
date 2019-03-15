<template>
  <div ref="div">{{title}}</div>
</template>

<script>
export default {
  name: 'Instance',
  props: {
    username: {
      type: String,
      default: ''
    },
    age: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      title: 'instance'
    }
  }
}
</script>
