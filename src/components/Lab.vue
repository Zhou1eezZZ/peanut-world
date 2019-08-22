<template>
  <div>
    <h1>实验室 / something interesting😱</h1>
    <el-divider />
    <h3>可滑动卡片</h3>
    <wipe-card
      style="margin-top:15px;"
      :pages="imgList"
    />
  </div>
</template>

<script>
import WipeCard from './utils/WipeCard'
export default {
  components: {
    WipeCard
  },
  data() {
    return {
      imgList: [
        {
          id: 1,
          src: 'https://warpcgd.github.io/vue-tantan-stack/src/img/1.png'
        },
        {
          id: 2,
          src: 'https://warpcgd.github.io/vue-tantan-stack/src/img/2.png'
        },
        {
          id: 3,
          src: 'https://warpcgd.github.io/vue-tantan-stack/src/img/3.png'
        },
        {
          id: 4,
          src: 'https://warpcgd.github.io/vue-tantan-stack/src/img/4.png'
        },
        {
          id: 5,
          src: 'https://warpcgd.github.io/vue-tantan-stack/src/img/5.png'
        },
        {
          id: 6,
          src: 'https://warpcgd.github.io/vue-tantan-stack/src/img/6.png'
        },
        {
          id: 7,
          src: 'https://warpcgd.github.io/vue-tantan-stack/src/img/7.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
    font-weight: bold;
    font-size: 24px;
}
h3 {
    font-weight: bold;
    font-size: 20px;
}
</style>
