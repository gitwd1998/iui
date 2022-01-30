export default {
  name: 'iButton',
  render(h) {
    return h('button', { ...{ attrs: this.$attrs }, ...{ on: this.$listeners } }, this.$slots.default)
  }
}