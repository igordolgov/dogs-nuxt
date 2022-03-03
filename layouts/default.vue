<template lang="pug">
#app.flex.column.j-between
  vHeader
  main.grow
    nuxt
  vFooter#footer
</template>

<script>
import vHeader from '@/components/header'
import vFooter from '@/components/footer'

export default {
  components: {
    vHeader,
    vFooter
  }
}
</script>

<style lang="scss" scoped>
#app {
  min-height: 100vh;
  // padding: 0 60px;
  background: linear-gradient(180deg, #1b1a1f 0%, #111013 99.09%);
}
</style>
