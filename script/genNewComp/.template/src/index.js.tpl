export default {
  name: "{{compName}}",
  props: {

  },
  render(h) {
    return h("div", { ...{ attrs: this.$attrs }, ...{ on: this.$listeners } }, this.$slots.default)
  }
}