<template lang="pug">
.page.index
  .wrapper
    Select
    ListItems(v-if="imagesList.length" :imagesList='imagesList')
</template>

<script>
import Select from '@/components/select'
import ListItems from '@/components/listItems'

export default {
  name: 'page-index',
  components: { Select, ListItems },

  data () {
    return {
      // Создаём массивы (пустые) для хранения данных, полученных из API
      breedsList: [],
      imagesList: [],
      // Переменная для хранения состояния загрузки (для компонента Loader)
      loading: false
    }
  },

  mounted () {
    this.getDogsImages()
    this.handleScroll()
  },

  methods: {
    getDogsImages () {
      // Включаем анимацию загрузки (компонент Loader)
      this.loading = true
      // Получаем из API 13 картинок собак (рандомных)
      fetch('https://dog.ceo/api/breeds/image/random/13')
        // декодируем ответ в формате JSON
        .then(response => response.json())
        // добавляем обработанные данные в ранее созданный для хранения массив
        .then(json => {
          this.imagesList.push(...json.message)
          // отключаем анимацию загрузки
          this.loading = false
        })
    },

    handleScroll () {
      window.addEventListener('scroll', this.handleScroll)
      const windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom
      // Если не активна загрузка (элемент Loader),
      if (this.loading === false) {
        // если пользователь прокрутил достаточно далеко (< 100px до конца страницы),
        if (windowRelativeBottom < document.documentElement.clientHeight + 100) {
          // запустить метод 'getMoreImages' (загрузить ещё 12 картинок)
          this.getMoreImages()
        }
      } else { return false }
    },

    getMoreImages () {
      if (this.loading === false) {
        // Включаем анимацию загрузки
        this.loading = true
        // Получаем из API ещё 12 картинок собак (рандомных)
        fetch('https://dog.ceo/api/breeds/image/random/12')
          // декодируем ответ в формате JSON
          .then(response => response.json())
          .then(json => {
            // добавляем обработанные данные в ранее созданный для хранения массив
            this.imagesList.push(...json.message)
            // отключаем анимацию загрузки (компонент Loader)
            this.loading = false
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
