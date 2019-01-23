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
  const importList = {}
  // inject-end
  import render from './render'
  export default {
    name: 'home',
    components: {
      render
    },
    data () {
      return {
        components: require('@@/site-config.json').components,
        importList
      }
    },
    created () {
    }
  }
</script>
