webpackJsonp([2],{

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.5.1@vue-loader/lib/loaders/templateLoader.js?{"compilerOptions":{"preserveWhitespace":false}}!./node_modules/_vue-loader@15.5.1@vue-loader/lib?{"compilerOptions":{"preserveWhitespace":false}}!./App.vue?vue&type=template&id=227b649c&
var lib___compilerOptions____preserveWhitespace__false___Appvue_type_template_id_227b649c__render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./App.vue?vue&type=template&id=227b649c&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.5.1@vue-loader/lib?{"compilerOptions":{"preserveWhitespace":false}}!./App.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var lib___compilerOptions____preserveWhitespace__false___Appvue_type_script_lang_js_ = ({
  name: 'app'
});
// CONCATENATED MODULE: ./App.vue?vue&type=script&lang=js&
 /* harmony default export */ var Appvue_type_script_lang_js_ = (lib___compilerOptions____preserveWhitespace__false___Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.5.1@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./App.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Appvue_type_script_lang_js_,
  lib___compilerOptions____preserveWhitespace__false___Appvue_type_template_id_227b649c__render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "App.vue"
/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./node_modules/_vue-router@3.0.2@vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__(7);

// CONCATENATED MODULE: ./router.js



vue_runtime_esm["a" /* default */].use(vue_router_esm["a" /* default */]);

function createRouter() {
  return new vue_router_esm["a" /* default */]({
    mode: 'hash',
    routes: [{
      path: '/',
      name: 'index',
      component: function component() {
        return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 51));
      }
      // component: require('./src/views/Index.vue')
    }]
  });
}
// CONCATENATED MODULE: ./app.js




function createApp() {
  var router = createRouter();
  var app = new vue_runtime_esm["a" /* default */]({
    render: function render(h) {
      return h(App);
    },
    router: router
  });
  return { app: app, router: router };
}
// CONCATENATED MODULE: ./entry-client.js


// 客户端特定引导逻辑……

var _createApp = createApp(),
    entry_client_app = _createApp.app,
    entry_client_router = _createApp.router;

// 这里假定 App.vue 模板中根元素具有 `id="app"`


entry_client_router.onReady(function () {
  entry_client_app.$mount('#app');
});

/***/ })

},[3]);