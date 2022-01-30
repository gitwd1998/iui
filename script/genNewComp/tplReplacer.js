// https://www.handlebarsjs.cn/
const handlebars = require('handlebars')
const fs = require('fs-extra')
const { resolve } = require('path')

const getTplFilePath = meta => ({
  // docs 目录
  md: {
    from: './.template/docs/README.md.tpl',
    to: `../../packages/${meta.compName}/docs/README.md`
  },
  demo: {
    from: './.template/docs/demo.vue.tpl',
    to: `../../packages/${meta.compName}/docs/demo.vue`
  },
  // src 目录
  js: {
    from: './.template/src/index.js.tpl',
    to: `../../packages/${meta.compName}/src/index.js`
  },
  // 组件根目录
  index: {
    from: './.template/index.js.tpl',
    to: `../../packages/${meta.compName}/index.js`
  },
})

// 在 packages 中创建组件
const compFilesTplReplacer = (meta) => {
  const filePaths = getTplFilePath(meta)
  Object.keys(filePaths).forEach(key => {
    const fileTpl = fs.readFileSync(resolve(__dirname, filePaths[key].from), 'utf-8')
    const fileContent = handlebars.compile(fileTpl)(meta)
    fs.outputFile(resolve(__dirname, filePaths[key].to), fileContent, err => {
      if (err) console.error(err)
    })
  })
}

// 读取 packages/componsnts.json 并更新
const listJsonTplReplacer = (meta) => {
  const listFilePath = '../../packages/components.json'
  const listFileContent = fs.readJsonSync(resolve(__dirname, listFilePath))
  listFileContent.push(meta)
  fs.writeFile(resolve(__dirname, listFilePath), JSON.stringify(listFileContent, null, 2), err => {
    if (err) console.error(err)
  })
  return listFileContent
}

// 更新 packages/index.js
const installTsTplReplacer = (listFileContent) => {
  const installFileFrom = './.template/install.js.tpl'
  const installFileTo = '../../packages/index.js'
  const installFileTpl = fs.readFileSync(resolve(__dirname, installFileFrom), 'utf-8')
  const installMeta = {
    importPlugins: listFileContent.map(({ compName }) => `import { ${compName}Plugin } from './${compName}'`).join('\n'),
    installPlugins: listFileContent.map(({ compName }) => `${compName}Plugin.install?.(Vue)`).join('\n    '),
    exportPlugins: listFileContent.map(({ compName }) => `export * from './${compName}'`).join('\n'),
  }
  const installFileContent = handlebars.compile(installFileTpl, { noEscape: true })(installMeta)
  fs.outputFile(resolve(__dirname, installFileTo), installFileContent, err => {
    if (err) console.error(err)
  })
}

// 更新 src/router/index.js
const routerTplReplacer = (listFileContent) => {
  const routerFileFrom = './.template/router.js.tpl'
  const routerFileTo = '../../src/router/index.js'
  const routerFileTpl = fs.readFileSync(resolve(__dirname, routerFileFrom), 'utf-8')
  const routerMeta = {
    routes: listFileContent.map(comp => {
      return `{
        name: '${comp.compName}',
        path: '/components/${comp.compClassName}',
        meta: { title: '${comp.compClassName}' },
        component: () => import('../../packages/${comp.compName}/docs/README.md')
      }`
    })
  }
  const routerFileContent = handlebars.compile(routerFileTpl, { noEscape: true })(routerMeta)
  fs.outputFile(resolve(__dirname, routerFileTo), routerFileContent, err => {
    if (err) console.error(err)
  })
}

module.exports = (meta) => {
  compFilesTplReplacer(meta)
  const listFileContent = listJsonTplReplacer(meta)
  routerTplReplacer(listFileContent)
  installTsTplReplacer(listFileContent)
}