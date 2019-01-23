webpackJsonp([0],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.5.1@vue-loader/lib/loaders/templateLoader.js?{"compilerOptions":{"preserveWhitespace":false}}!./node_modules/_vue-loader@15.5.1@vue-loader/lib?{"compilerOptions":{"preserveWhitespace":false}}!./src/views/Index.vue?vue&type=template&id=1e1bb547&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},_vm._l((_vm.components),function(item){return _c(item.name,{key:item.id,tag:"component",attrs:{"data-id":item.id,"config":item.props}})}),1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/Index.vue?vue&type=template&id=1e1bb547&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.5.1@vue-loader/lib?{"compilerOptions":{"preserveWhitespace":false}}!./src/views/Index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

// inject-start
var components = [];
// inject-end

// import render from './render'
/* harmony default export */ var Indexvue_type_script_lang_js_ = ({
  name: 'index',
  components: {
    // render
  },
  data: function data() {
    return {
      components: []
    };
  },
  created: function created() {},
  mounted: function mounted() {
    // 在build时，应该将组件数据直接注入打包
    this.components = window.INIT_DATA;
  }
});
// CONCATENATED MODULE: ./src/views/Index.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_Indexvue_type_script_lang_js_ = (Indexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.5.1@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./src/views/Index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  views_Indexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Index.vue"
/* harmony default export */ var Index = __webpack_exports__["default"] = (component.exports);

/***/ })

});