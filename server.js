const fs = require('fs')
const { createBundleRenderer } = require('vue-server-renderer')
const isPreview = process.env.BUILD === 'preview'
const path = require('path')

// 第 1 步：创建一个 Vue 实例
const targetDir = isPreview ? './dist' : './release'
const serverBundle = require(`${targetDir}/vue-ssr-server-bundle.json`)
const clientManifest = require(`${targetDir}/vue-ssr-client-manifest.json`)
const template = fs.readFileSync('./index.template.html', 'utf-8')
const componentsConfig = require('./site-config')

// 默认首页配置
// 走ssr渲染
const componentsScript = `<script type="text/javascript">
  // global-data-start  
  window.INIT_DATA = ${JSON.stringify(componentsConfig.components.map(x => {
    return { ...x, schema: null }
  }))}
  // global-data-end
  </script>`

// 其他页面配置
// 通过watch切换
Object.keys(componentsConfig.multiData).forEach(id => {
  componentsConfig.multiData[id].components = componentsConfig.multiData[id].components.map(x => {
    return { ...x, schema: null }
  })
})
const multiPageConfig = `<script type="text/javascript">
  // multi-data-start  
  window.MULTI_DATA = ${JSON.stringify(componentsConfig.multiData)}
  // multi-data-end
  </script>`
const htmlTargetPath = path.resolve(__dirname, targetDir, 'index.html')

const context = {
  title: componentsConfig.title,
  bgColor: componentsConfig.bgColor,
  meta: `<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no">`,
  url: '/',
  renderComponents () {
    return isPreview ? componentsScript : ''
  },
  renderMultiData () {
    return multiPageConfig
  }
}

// 第 2 步：创建一个 renderer
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, // 自己创见新的实例
  template,
  clientManifest
})

renderer.renderToString(context).then(html => {
  fs.writeFileSync(htmlTargetPath, html, 'utf-8', err => {
    if (err) throw err
  })
}).catch(err => {
  console.error(err)
})
// 第 3 步：将 Vue 实例渲染为 HTML
// 在 2.5.0+，如果没有传入回调函数，则会返回 Promise：
// createApp(context).then(app => {
// })
