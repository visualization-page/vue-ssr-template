<template>
  <div class="home">
    <render
      :components="components"
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
        components: []
      }
    },
    created () {
    },
    mounted () {
      // 在build时，应该将组件数据直接注入打包
      this.components = window.INIT_DATA
    }
  }
</script>
