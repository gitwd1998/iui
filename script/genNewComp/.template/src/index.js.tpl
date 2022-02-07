export default {
  name: "{{compName}}",
  props: {

  },
  render(h) {
    return h("div", { class: "{{compClassName}}", ...{ attrs: this.$attrs }, ...{ on: this.$listeners } }, this.$slots.default)
  }
}