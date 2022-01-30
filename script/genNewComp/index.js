const infoCollector = require('./infoCollector')
const tplReplacer = require('./tplReplacer')

async function run() {
  const meta = await infoCollector()
  tplReplacer(meta)
  console.log('\x1B[36m%s\x1B[0m', meta)
  console.log('\x1B[36m%s\x1B[0m', `\n    组件新建完毕`)
  console.log('\x1B[36m%s\x1B[0m', `    cd packages/${meta.compName} \n`)
}

run()