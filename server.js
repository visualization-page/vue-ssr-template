const fs = require('fs')
const { createBundleRenderer } = require('vue-server-renderer')

// 第 1 步：创建一个 Vue 实例
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const template = fs.readFileSync('./index.template.html', 'utf-8')
const componentsConfig = require('./site-config')
const componentsScript = `<script type="text/javascript">
  window.INIT_DATA = ${JSON.stringify(componentsConfig.components)}
  </script>`

const context = {
  title: '',
  meta: `<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no">`,
  url: '/',
  renderComponents() {
    return componentsScript
  }
}

// 第 2 步：创建一个 renderer
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, // 自己创见新的实例
  template,
  clientManifest
})

renderer.renderToString(context).then(html => {
  fs.writeFileSync('./dist/index.html', html, 'utf-8', err => {
    if (err) throw err
  })
}).catch(err => {
  console.error(err)
})
// 第 3 步：将 Vue 实例渲染为 HTML
// 在 2.5.0+，如果没有传入回调函数，则会返回 Promise：
// createApp(context).then(app => {
// })
