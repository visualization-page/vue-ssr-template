<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
html {
  min-height: 100%;
}
body {
  margin: 0
}
div {
  box-sizing: border-box;
}
#app
  max-width: 540px
  margin: 0 auto
</style>

