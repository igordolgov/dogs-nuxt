<template lang="pug">
.loader
  div.circle1
  div.circle2
  div.circle3
</template>

<script>
export default {
  name: 'loader-component'
}
</script>

<style lang="scss">
.loader {
  position: relative;
  display: flex;
  width: 120px;
  height: 12px;
  --size: 12px;
  --largeSize: 16px;
  --color: none;
  --speed: 1.5s;
  --padding: 10px;

  & div {
    position: absolute;
    background: var(--color);
    border: 1px solid $color-white;
    border-radius: 100%;
    width: var(--largeSize);
    height: var(--largeSize);
  }

  @keyframes inlarge1 {
    0%,
    10%,
    30%,
    100% {
      width: var(--size);
      height: var(--size);
      top: 0;
      left: 0;
    }
    20% {
      width: var(--largeSize);
      height: var(--largeSize);
      top: -3px;
      left: -3px;
    }
  }

  @keyframes inlarge2 {
    0%,
    40%,
    60%,
    100% {
      width: var(--size);
      height: var(--size);
      top: 0;
      left: calc(var(--largeSize) + var(--padding));
    }
    50% {
      width: var(--largeSize);
      height: var(--largeSize);
      top: -3px;
      left: calc(var(--largeSize) + var(--padding) - 3px);
    }
  }

  @keyframes inlarge3 {
    0%,
    70%,
    90%,
    100% {
      width: var(--size);
      height: var(--size);
      top: 0;
      left: calc(var(--largeSize) * 2 + var(--padding) * 2);
    }
    80% {
      width: var(--largeSize);
      height: var(--largeSize);
      top: -3px;
      left: calc(var(--largeSize) * 2 + var(--padding) * 2 - 3px);
    }
  }

    .circle1 {
      animation: var(--speed) ease-in-out 0s infinite inlarge1;
      left: 0;
    }

    .circle2 {
      animation: var(--speed) ease-in-out infinite inlarge2;
      left: calc(var(--largeSize) + var(--padding));
    }

    .circle3 {
      animation: var(--speed) ease-in-out infinite inlarge3;
      left: calc(var(--largeSize) * 2 + var(--padding) * 2);
    }
}
</style>
