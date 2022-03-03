<template lang="pug">
ul.list-items-component.flex.wrap
  li.list-items.grow.cover(v-for='(item,i) of imagesList' :key='i' :item='item')
    img.item-image(:src='item' :alt='item')
    .image-shadow.stretch
    button.btn-heart(@click.prevent='addToFavourites')
      svg.icon-heart(
        viewBox='0 0 16 14'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
      )
        path(
          d='M7.59056 13.8381L1.44808 8.00922C-0.482693 6.17704 -0.482693 3.20132 1.44808 1.36913C3.24062 -0.331881 6.06651 -0.447887 8 1.02111C9.93349 -0.447887 12.7594 -0.331881 14.5519 1.36913C16.4827 3.20132 16.4827 6.17704 14.5519 8.00922L8.40944 13.8381C8.1819 14.054 7.8181 14.054 7.59056 13.8381ZM2.26705 2.18038C0.805427 3.56738 0.805427 5.81097 2.26705 7.19796L8.0001 12.6383L13.7332 7.19796C15.1948 5.81097 15.1948 3.56738 13.7332 2.18038C12.2645 0.786714 9.8782 0.786714 8.40954 2.18038C8.182 2.3963 7.8182 2.3963 7.59067 2.18038C6.122 0.786714 3.73572 0.786714 2.26705 2.18038Z'
        )
    //- span.breed-name {{ item }}
  button.button-to-top(type='button' @click='goToTop')
    svg(
      width='56'
      height='56'
      viewBox='0 0 55 55'
      xmlns='http://www.w3.org/2000/svg'
    )
      circle(
        cx='28'
        cy='28'
        r='26'
        stroke='#fff'
        stroke-width='2'
        fill='none'
      )
      path(
        fill='#fff'
        d='M33.9667 25.8088C33.5891 26.1865 32.9767 26.1865 32.599 25.8088L29.0921 22.3019V38.0197C29.0921 38.5538 28.6591 38.9868 28.125 38.9868C27.5909 38.9868 27.1579 38.5538 27.1579 38.0197V22.3019L23.651 25.8088C23.2733 26.1865 22.6609 26.1865 22.2833 25.8088C21.9056 25.4311 21.9056 24.8188 22.2833 24.4411L27.4412 19.2832C27.8188 18.9056 28.4312 18.9056 28.8088 19.2832L33.9667 24.4411C34.3444 24.8188 34.3444 25.4311 33.9667 25.8088Z'
      )
</template>

<script>
export default {
  name: 'list-items-component',
  /* eslint-disable space-before-function-paren */
  props: {
    imagesList: {
      type: Array
    }
  },

  // После монтирования всех элементов на странице запустить следующие методы:
  mounted() {
    this.showElementOnScroll()
  },

  methods: {
    showElementOnScroll() {
      // ПОЯВЛЕНИЕ И ИСЧЕЗНОВЕНИЕ ЭЛЕМЕНТА СТРАНИЦЫ ПРИ СКРОЛЛЕ //
      // =====================================================================
      // Создаём переменную screenY со значением равным 1000px
      const screenY = 1000
      /* Создаём переменную btnToShow со значением равным элементу с выбранным классом,
    т.е. указываем, элемент с каким классом будем показывать или скрывать */
      const btnToShow = document.querySelector('.button-to-top')
      // При прокрутке страницы выполнится следующая функция:
      window.onscroll = function () {
        // если пролистали больше, чем значение переменной screenY
        if (scrollY > screenY) {
          // указанному элементу добавляется свойство 'position: fixed'
          btnToShow.classList.add('fixed')
        } else {
          // если страница не пролистана наполовину, 'position: fixed' удаляется
          btnToShow.classList.remove('fixed')
        }
      }
    },
    /* ====================================================================== */

    // Плавный переход наверх страницы
    goToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },

    addToFavourites() {
      event.target.classList.toggle('icon-heart--active')
    }
  }
}
</script>

<style lang="scss" scoped>
.list-items-component {
  position: relative;
  list-style-type: none;
  column-gap: 30px;
  row-gap: 30px;

  .list-items {
    position: relative;
    width: 100%;

    &:first-child {
      .item-image {
        position: relative;
        height: 513px;
        object-position: center;
        border-radius: 10px;
      }
    }

    &:not(:first-child) {
      flex-basis: 23%;

      .item-image {
        position: relative;
        min-width: 367px;
        height: 290px;
        object-position: top;
        border-radius: 8px;
      }
    }

    .image-shadow {
      background: linear-gradient(
        1.26deg,
        #000000 -5.53%,
        rgba(0, 0, 0, 0) 54.45%
      );
      opacity: 0.6;
    }

    .btn-heart {
      position: absolute;
      top: 25px;
      left: 25px;
      z-index: 10;
      width: 29px;
      height: 26px;
      background-color: transparent;
      cursor: pointer;

      .icon-heart {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 29px;
        height: 26px;
        color: $color-white;
        transition: 0.3s;

        &--active {
          color: red;
        }
      }
    }

    .breed-name {
      position: absolute;
      bottom: 25px;
      right: 25px;
      width: auto;
      z-index: 1;
      color: $color-white;
      font-size: 25px;
      font-weight: 600;
    }
  }

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
}
</style>
