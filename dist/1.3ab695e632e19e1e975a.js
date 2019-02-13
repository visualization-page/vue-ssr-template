webpackJsonp([1],{

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(11).default
var update = add("6aa9250b", content, true, {});

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_3_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_3_2_node_modules_vue_loader_15_5_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_3_0_2_stylus_loader_index_js_node_modules_vue_loader_15_5_1_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_stylus___ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_3_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_3_2_node_modules_vue_loader_15_5_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_3_0_2_stylus_loader_index_js_node_modules_vue_loader_15_5_1_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_stylus____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_3_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_3_2_node_modules_vue_loader_15_5_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_3_0_2_stylus_loader_index_js_node_modules_vue_loader_15_5_1_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_stylus___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_3_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_3_2_node_modules_vue_loader_15_5_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_3_0_2_stylus_loader_index_js_node_modules_vue_loader_15_5_1_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_stylus____default.a); 

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".ytext{margin-bottom:1.2em}.ytext__bold{font-weight:700}.ytext__aft-img,.ytext__pre-img{font-size:0;text-align:center}.ytext__aft-img img,.ytext__pre-img img{max-width:100%}.ytext__content{padding:0 10px;margin-top:10px}.ytext__content--indent{text-indent:2em}.ytext__title{padding:10px}.ytext__title--main{font-size:18px}.ytext__title--sub{font-size:12px;color:#999}", ""]);

// exports


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.5.1@vue-loader/lib/loaders/templateLoader.js?{"compilerOptions":{"preserveWhitespace":false}}!./node_modules/_vue-loader@15.5.1@vue-loader/lib?{"compilerOptions":{"preserveWhitespace":false}}!./src/components/text/index.vue?vue&type=template&id=09ac604c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ytext"},[(_vm.subType === 2)?_c('div',{staticClass:"ytext__title",style:({
      textAlign: _vm.textAlign
    })},[_c('div',{staticClass:"ytext__title--main",class:{
        'ytext__bold': _vm.isBold
      }},[_vm._v("\n      "+_vm._s(_vm.text)+"\n    ")]),(_vm.subText)?_c('div',{staticClass:"ytext__title--sub"},[_vm._v("\n      "+_vm._s(_vm.subText)+"\n    ")]):_vm._e()]):[(_vm.preImg)?_c('div',{staticClass:"ytext__pre-img"},[_c('img',{style:({ width: (_vm.preWidth + "px"), height: (_vm.preHeight + "px") }),attrs:{"src":_vm.preImg,"alt":""}})]):_vm._e(),_c('div',{staticClass:"ytext__content",class:{
        'ytext__content--indent': _vm.textAlign === 'left',
        'ytext__bold': _vm.isBold
      },style:({
        textAlign: _vm.textAlign,
        color: _vm.color,
        fontSize: (_vm.fontSize + "px")
      }),domProps:{"innerHTML":_vm._s(_vm.escapeText)}}),(_vm.aftImg && false)?_c('div',{staticClass:"ytext__aft-img"},[_c('img',{style:({ width: (_vm.aftWidth + "px"), height: (_vm.aftHeight + "px") }),attrs:{"src":_vm.aftImg,"alt":""}})]):_vm._e()]],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/text/index.vue?vue&type=template&id=09ac604c&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.5.1@vue-loader/lib?{"compilerOptions":{"preserveWhitespace":false}}!./src/components/text/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var textvue_type_script_lang_js_ = ({
  name: 'ytext',

  props: {
    subType: {
      type: Number,
      default: 1 // 1 图片+段落+图片，2 标题
    },
    text: {
      type: String,
      default: ''
    },
    isTextIndent: Boolean,
    textAlign: {
      type: String,
      default: 'left'
    },
    color: {
      type: String,
      default: '#333'
    },
    fontSize: {
      type: Number,
      default: 14
    },
    isBold: Boolean,
    preImg: String,
    preWidth: Number,
    preHeight: Number,
    aftImg: String,
    aftWidth: Number,
    aftHeight: Number,
    subText: String
  },

  computed: {
    escapeText: function escapeText() {
      return this.text.replace(/<([a-z\/]+)/g, '&lt;$1').replace(/([a-z]+)>/g, '$1&gt;');
    }
  }
});
// CONCATENATED MODULE: ./src/components/text/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_textvue_type_script_lang_js_ = (textvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/text/index.vue?vue&type=style&index=0&lang=stylus&
var textvue_type_style_index_0_lang_stylus_ = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/_vue-loader@15.5.1@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./src/components/text/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_textvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "index.vue"
/* harmony default export */ var components_text = __webpack_exports__["default"] = (component.exports);

/***/ })

});