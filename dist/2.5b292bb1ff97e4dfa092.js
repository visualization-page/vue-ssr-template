webpackJsonp([2],{

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(11).default
var update = add("1ddad010", content, true, {});

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_3_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_3_2_node_modules_vue_loader_15_5_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_3_0_2_stylus_loader_index_js_node_modules_vue_loader_15_5_1_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_stylus___ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_3_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_3_2_node_modules_vue_loader_15_5_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_3_0_2_stylus_loader_index_js_node_modules_vue_loader_15_5_1_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_stylus____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_3_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_3_2_node_modules_vue_loader_15_5_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_3_0_2_stylus_loader_index_js_node_modules_vue_loader_15_5_1_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_stylus___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_extract_text_webpack_plugin_3_0_2_extract_text_webpack_plugin_dist_loader_js_ref_3_0_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_ref_3_2_node_modules_vue_loader_15_5_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_3_0_2_stylus_loader_index_js_node_modules_vue_loader_15_5_1_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_stylus____default.a); 

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".ybutton{font-size:14px;cursor:pointer;color:#666}.ybutton__wrapper{height:inherit;transition:background-color .3s;border-width:1px;border-style:solid;background-repeat:no-repeat;background-size:100% 100%}.ybutton__wrapper:hover{background-color:rgba(0,0,0,.1)}.ybutton-type__inline{display:inline-block}.ybutton-type__block{text-align:center}.ybutton-type__fixed{position:fixed;text-align:center;width:100%;left:0}.ybutton-type__fixed--bottom{bottom:0;box-shadow:0 -2px 6px rgba(0,0,0,.3)}.ybutton-type__fixed--top{top:0}.ybutton-type__fixed>div{border-radius:0}.ybutton-size__large{padding:10px 23px;border-radius:4px}.ybutton-size__middle{padding:7px 13px;border-radius:3px}.ybutton-size__small{font-size:12px;padding:3px 10px;border-radius:2px}", ""]);

// exports


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.5.1@vue-loader/lib/loaders/templateLoader.js?{"compilerOptions":{"preserveWhitespace":false}}!./node_modules/_vue-loader@15.5.1@vue-loader/lib?{"compilerOptions":{"preserveWhitespace":false}}!./src/components/button/index.vue?vue&type=template&id=7d9f517e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ybutton",class:{
    'ybutton-type__inline': _vm.subType === 1,
    'ybutton-type__block': _vm.subType === 2,
    'ybutton-type__fixed': _vm.subType === 3,
    'ybutton-type__fixed--bottom': _vm.subType === 3 && _vm.fixedPosition === 'bottom',
    'ybutton-type__fixed--top': _vm.subType === 3 && _vm.fixedPosition === 'top'
  },style:({
    margin: (_vm.subType === 1 || _vm.subType === 2) && ((_vm.marginTb || 0) + "px " + (_vm.marginLr || 10) + "px")
  }),on:{"click":_vm.handleClick}},[_c('div',{staticClass:"ybutton__wrapper",class:{
      'ybutton-size__large': _vm.size === 'large',
      'ybutton-size__middle': _vm.size === 'middle',
      'ybutton-size__small': _vm.size === 'small'
    },style:({
      backgroundColor: _vm.backgroundColor,
      color: _vm.color,
      borderColor: _vm.yBorderColor,
      backgroundImage: _vm.backgroundImage && ("url(" + _vm.backgroundImage + ")")
    })},[_c('span',[_vm._v(_vm._s(_vm.text))])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/button/index.vue?vue&type=template&id=7d9f517e&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.5.1@vue-loader/lib?{"compilerOptions":{"preserveWhitespace":false}}!./src/components/button/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
  name: 'ybutton',

  props: {
    subType: {
      type: Number,
      default: 1 // 1 inline-block按钮，2 block按钮，3 固定按钮
    },
    marginTb: Number,
    marginLr: Number,
    size: {
      type: String,
      default: 'middle' // large middle small
    },
    text: String,
    backgroundColor: String,
    color: String,
    borderColor: String,
    fixedPosition: {
      type: String,
      default: 'bottom'
    },
    backgroundImage: String,
    click: String
  },

  computed: {
    // isTsBg () {
    //   return (/ffffff|white|255, ?255, ?255/.test(this.backgroundColor) || !this.backgroundColor) && !this.backgroundImage
    // },
    // yColor () {
    //   return this.isTsBg ? null : this.color || '#ffffff'
    // },
    yBorderColor: function yBorderColor() {
      return this.borderColor || this.backgroundColor || '#eeeeee';
    }
  },

  methods: {
    handleClick: function handleClick() {
      var click = this.click.split('_');
      // type: link; tel
      var isTel = click[0] === 'tel';
      var val = click[1];
      if (click.length > 2) {
        val = click.slice(1, click.length).join('_');
      }
      if (isTel) {
        location.href = val;
      } else {
        window.open(val);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/button/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/button/index.vue?vue&type=style&index=0&lang=stylus&
var buttonvue_type_style_index_0_lang_stylus_ = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/_vue-loader@15.5.1@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./src/components/button/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "index.vue"
/* harmony default export */ var components_button = __webpack_exports__["default"] = (component.exports);

/***/ })

});