<template lang="pug">
footer.footer-component.wrapper.flex.a-center.j-center
  Loader
</template>

<script>
import Loader from '@/components/loader'

export default {
  name: 'footer-component',
  components: {
    Loader
  }
}
</script>

<style lang="scss" scoped>
.footer-component {
  height: 117px;
  color: $color-white;
}
</style>
