<script>
export default {
  name: 'Tabs',
  props: {
    value: {
      type: [Number, String],
      required: true
    }
  },
  render () {
    return (
      <div class="tabs">
        <ul class="tabs-header">
          {this.$slots.default}
        </ul>
      </div>
    )
  }
}
</script>
