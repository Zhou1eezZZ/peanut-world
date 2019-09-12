<template>
  <div class="article-container">
    <ul>
      <el-card
        v-for="(i,index) in articleList"
        :key="index"
        class="card wow slideInUp"
        shadow="hover"
        @click.native="toDetail(i.id)"
      >
        {{ `${emojis[Math.floor(Math.random()*emojis.length)]} ${i.title}` }}
      </el-card>
    </ul>
  </div>
</template>

<script>
import articleList from '../assets/article'
export default {
  data() {
    return {
      articleList,
      emojis: ['😄', '😃', '😀', '😊', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😁', '😔', '😌', '😒', '😞', '😣', '😢', '😂', '😭', '😪', '😥', '😰', '😅', '😓', '😩', '😫', '😨', '😱', '😠', '😡', '😤', '😖', '😆', '😋', '😷', '😎', '😴', '😵', '😲', '😟', '😦', '😧', '👿', '😮', '😬', '😐', '😕', '😯', '😏', '😑', '👲', '👳', '👮', '👷', '💂', '👶', '👦', '👧', '👨', '👩', '👴', '👵', '👱', '👼', '👸', '😺', '😸', '😻', '😽', '😼', '🙀', '😿', '😹', '😾', '👹', '👺', '🙈', '🙉', '🙊', '💀', '👽', '💩', '🔥', '✨', '🌟', '💫', '💥', '💢', '💦', '💧', '💤']
    }
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
