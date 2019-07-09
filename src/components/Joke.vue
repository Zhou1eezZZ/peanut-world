<template>
  <div class="joke-container">
    <h1 class="article-h1">
      Peanut 🤣🤣🤣 Time !
    </h1>
    <blockquote
      v-for="(i,index) in joke"
      :key="index"
    >
      <p class="article-p">
        {{ i.content }}
        <span
          :class="{fave:true,active:i.isLike}"
          style="float:right;cursor:pointer"
          @click="toggle(index)"
        />
      </p>
    </blockquote>
  </div>
</template>

<script>
import joke from '@/assets/joke'
export default {
  data() {
    return {
      joke
    }
  },
  methods: {
    toggle(index) {
      this.joke[index].isLike = !this.joke[index].isLike
      this.$notify({
        title: '🍳🍳🍳',
        message: '天天煎煎煎,NM$L',
        duration: 0
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.joke-container{
  text-align: left;
  width: 690px;
  .article-h1{
    font-weight: 600;
    font-synthesis: style;
    font-size: 24px;
    line-height: 1.22;
    margin: 24px 0;
  }
  .article-p{
    margin: 3.6em 0;
    line-height: 1.6;
  }
  blockquote{
    margin: 1.4em 0;
    padding-left: 1em;
    color: #646464;
    border-left: 3px solid #d3d3d3;
    .fave {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: 1px solid #EA6F5A;
      background: url(../assets/like_animation_steps.webp) no-repeat;
      background-position: left;
      background-size: auto 100%;
    }
    .fave.active {
      background-color: #EA6F5A;
      background-position: right;
      /* 主要在这一步 */
      transition: background .6s steps(19);
    }
  }
}

</style>
