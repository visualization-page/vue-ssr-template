<template>
  <div class="home">
    <render
      :components="components"
      :import-list="$all"
    />
  </div>
</template>

<script>
  // inject-start
  const components = []
  // inject-end

  import render from './render'
  export default {
    name: 'index',

    components: {
      render
    },

    data () {
      return {
        components
      }
    },

    watch: {
      '$route.params.pageId': function (pageId) {
        this.renderSecond(pageId)
      }
    },

    mounted () {
      const { pageId } = this.$route.params
      if (pageId) {
        // 非首页
        this.renderSecond(pageId)
      } else if (components.length === 0) {
        // 在build时，应该将组件数据直接注入打包
        // 此处为preview时组件数据的动态替换
        this.components = window.INIT_DATA
      }
    },

    methods: {
      renderSecond (pageId) {
        if (!window.MULTI_DATA[pageId]) {
          alert('页面不存在')
          return
        }
        const { components, title, bgColor } = window.MULTI_DATA[pageId]
        this.components = components || []
        document.title = title
        document.documentElement.style.backgroundColor = bgColor
      }
    }
  }
</script>
