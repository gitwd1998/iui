// https://github.com/markdown-it/markdown-it-container
const mdContainer = require('markdown-it-container')


module.exports = md => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return params.trim().match(/^demo\s*(.*)$/)
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : ''
        const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''
        console.log('\x1B[36m%s\x1B[0m', content)
        return `<demo-block>
          ${description}
          <!--iui-demo: ${content}:iui-demo-->
        `
      }
      return '</demo-block>'
    }
  }).use(mdContainer, 'warning')
    .use(mdContainer, 'tip')
}