<template lang="pug">
.filter-active
  button.filter-btn.flex.a-center(
    type='button'
    v-model: isActive
    @click='showSelect'
  )
    span.breed-title Породы

    svg.select-arrow(
      width='9'
      height='5'
      viewBox='0 0 9 5'
      xmlns='http://www.w3.org/2000/svg'
    )
      path(
        d='M1.002 0.168977C0.772777 -0.0563256 0.401136 -0.0563256 0.171916 0.168977C-0.0573044 0.394279 -0.0573044 0.759567 0.171916 0.984869L4.08496 4.83102C4.31418 5.05633 4.68582 5.05633 4.91504 4.83102L8.82808 0.984869C9.05731 0.759567 9.05731 0.394279 8.82808 0.168977C8.59886 -0.0563256 8.22722 -0.0563256 7.998 0.168977L4.5 3.60718L1.002 0.168977Z',
        fill='currentColor'
      )

  .column.flex(v-show='isActive')
    .filter-checked
      .breed-category.flex
        input#all-breeds(
          type='radio'
          name='dogs'
          value='Все пёсели'
          checked
        )
        label(for='all-breeds') Все пёсели

    .filter-all-breeds.flex.wrap.a-center
      span.category-letter A
      .breed-category.flex(v-for='item in A' :key='item.title')
        input(
          type='radio'
          name='dogs'
          :id='item.title'
          :value='item.title'
        )
        label(:for='item.title') {{ item.title }}

      span.category-letter B
      .breed-category.flex(v-for='item in B' :key='item.title')
        input(
          type='radio'
          name='dogs'
          :id='item.title'
          :value='item.title'
        )
        label(:for='item.title') {{ item.title }}

      span.category-letter C
      .breed-category.flex(v-for='item in C' :key='item.title')
        input(
          type='radio'
          name='dogs'
          :id='item.title'
          :value='item.title'
        )
        label(:for='item.title') {{ item.title }}
</template>

<script>
export default {
  name: 'select-component',
  data: () => {
    return {
      isActive: false,

      A: [
        { title: 'Affenpinscher', favourites: false },
        { title: 'African', favourites: false },
        { title: 'Airedale', favourites: false },
        { title: 'Akita', favourites: false },
        { title: 'Appenzeller', favourites: false },
        { title: 'Australian', favourites: false }
      ],
      B: [
        { title: 'Basenji', favourites: false },
        { title: 'Beagle', favourites: false },
        { title: 'Bluetick', favourites: false },
        { title: 'Borzoi', favourites: false },
        { title: 'Bouvier', favourites: false },
        { title: 'Boxer', favourites: false },
        { title: 'Brabancon', favourites: false },
        { title: 'Briard', favourites: false },
        { title: 'Buhund', favourites: false },
        { title: 'Bulldog', favourites: false },
        { title: 'Bullterrier', favourites: false }
      ],
      C: [
        { title: 'Cairn', favourites: false },
        { title: 'Cattledog', favourites: false },
        { title: 'Chihuahua', favourites: false },
        { title: 'Chow', favourites: false },
        { title: 'Clumber', favourites: false },
        { title: 'Cockapoo', favourites: false },
        { title: 'Collie', favourites: false },
        { title: 'Coonhound', favourites: false }
      ]
    }
  },

  methods: {
    showSelect () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-active {
  padding: 20px 0 5px 0;

  .filter-btn {
    margin-bottom: 20px;
    color: $color-white;
    background-color: transparent;
    border-bottom: 1px dashed $color-white;
    cursor: pointer;

    .breed-title {
      margin-right: 10px;
      font-family: $font-family-default;
      line-height: 20px;
    }

    &--active {
      .select-arrow {
        transform: rotate(180deg);
        transition: 0.3s;
      }
    }
  }

  .filter-all-breeds {
    margin-bottom: 20px;
    padding: 0;
  }

  .breed-category {
    margin: 10px 0;
  }

  .category-letter {
    margin-right: 10px;
    color: $color-light;
    pointer-events: none;
    cursor: default;
  }

  label {
    font-size: 12px;
    line-height: 16px;
    color: $color-light;
    padding: 4px 12px;
    margin-right: 7px;
    border: 1px solid $color-light;
    border-radius: 20px;
    cursor: pointer;
  }

  input:checked + label {
    color: $color-primary;
    border-color: $color-primary;
  }

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
  }
}
</style>
