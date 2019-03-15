<template>
  <div class="home">
    <h2>home</h2>
    <!-- <notification content="not notificarion"/> -->
    <button @click="notify">clike me</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => {
    return { }
  },
  mounted () {
  },
  methods: {
    notify () {
      this.$notify({
        content: 'test notify',
        btn: 'close'
      })
    }
  }
}
</script>
