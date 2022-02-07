// https://highlightjs.org/
const hljs = require('highlight.js')
const anchorPlugin = require('markdown-it-anchor');
const containers = require('./containers');
const transliteration = require('transliteration');
const overWriteFenceRule = require('./fence');

// https://markdown-it.docschina.org/
const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (_) { }
    }
    return '' // 使用额外的默认转义
  }
}).use(anchorPlugin, {
  level: 1,
  slugify: transliteration.slugify,
  permalink: true,
  permalinkSpace: true,
  permalinkBefore: true
}).use(containers)

overWriteFenceRule(md)

module.exports = md