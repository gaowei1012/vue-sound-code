<script>
export default {
  name: 'Tab',
  props: {
    index: {
      type: [Number, String],
      required: true
    },
    label: {
      type: String,
      default: 'tab'
    }
  },
  computed: {
    active () {
      return false
    }
  },
  render () {
    const tab = this.$slots.label || <span>{this.label}</span>
    const className = {
      tab: true,
      active: this.active
    }
    return (
      <li class={className}>
        {tab}
      </li>
    )
  }
}
</script>

<style lang="stylus" scoped>
.tab
  list-style none
  line-height 40px
  margin-right 30px
  position relative
  bottom -2px
  cursor pointer
  &.active
    border-bottom 2px solid #ccc
  &:last-child
    margin-right 0
</style>
