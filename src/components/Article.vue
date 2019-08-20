<template>
  <div class="article-container">
    <ul>
      <el-card
        v-for="(i,index) in articleList"
        :key="index"
        class="card"
        shadow="hover"
        @click.native="toDetail(i.id)"
      >
        {{ `${emojis[Math.floor(Math.random()*emojis.length)]} ${i.title}` }}
      </el-card>
    </ul>
    <el-divider />
    <wipe-card :pages="imgList" />
  </div>
</template>

<script>
import articleList from '../assets/article'
import WipeCard from './utils/WipeCard'
export default {
  components: {
    WipeCard
  },
  data() {
    return {
      articleList,
      emojis: ['😄', '😃', '😀', '😊', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😁', '😔', '😌', '😒', '😞', '😣', '😢', '😂', '😭', '😪', '😥', '😰', '😅', '😓', '😩', '😫', '😨', '😱', '😠', '😡', '😤', '😖', '😆', '😋', '😷', '😎', '😴', '😵', '😲', '😟', '😦', '😧', '👿', '😮', '😬', '😐', '😕', '😯', '😏', '😑', '👲', '👳', '👮', '👷', '💂', '👶', '👦', '👧', '👨', '👩', '👴', '👵', '👱', '👼', '👸', '😺', '😸', '😻', '😽', '😼', '🙀', '😿', '😹', '😾', '👹', '👺', '🙈', '🙉', '🙊', '💀', '👽', '💩', '🔥', '✨', '🌟', '💫', '💥', '💢', '💦', '💧', '💤'],
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
  },
  created() {
    //
  },
  methods: {
    toDetail(id) {
      this.$router.push({ path: `/article/${id}` })
    }
  }
}
</script>

<style lang="scss" scoped>
.article-container{
  width: 690px;
  text-align:left;
  .card{
    margin-bottom: 1em;
    cursor: pointer;
  }
}
</style>
