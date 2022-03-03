<template lang="pug">
button.button-to-top(type='button', @click='goToTop')
    svg(
      width='56',
      height='56',
      viewBox='0 0 55 55',
      xmlns='http://www.w3.org/2000/svg'
    )
      circle(
        cx='28',
        cy='28',
        r='26',
        stroke='#fff',
        stroke-width='2',
        fill='none'
      )
      path(
        fill='#fff',
        d='M33.9667 25.8088C33.5891 26.1865 32.9767 26.1865 32.599 25.8088L29.0921 22.3019V38.0197C29.0921 38.5538 28.6591 38.9868 28.125 38.9868C27.5909 38.9868 27.1579 38.5538 27.1579 38.0197V22.3019L23.651 25.8088C23.2733 26.1865 22.6609 26.1865 22.2833 25.8088C21.9056 25.4311 21.9056 24.8188 22.2833 24.4411L27.4412 19.2832C27.8188 18.9056 28.4312 18.9056 28.8088 19.2832L33.9667 24.4411C34.3444 24.8188 34.3444 25.4311 33.9667 25.8088Z'
      )
</template>

<script>
export default {

}
</script>

<style lang="scss">
.button-to-top {
  position: fixed;
  right: 58px;
  bottom: 30px;
  z-index: 1;
  background-color: transparent;
  transform: scale(0);
  transition: 0.2s linear;
  cursor: pointer;

  &.fixed {
    transform: scale(1);
  }
}
</style>
