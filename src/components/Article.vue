<template>
  <div class="article-container">
    <h1 class="article-h1">
      {{ article.title }}
    </h1>
    <div
      v-for="(i,index) in article.content"
      :key="index"
    >
      <h2 class="article-h2">
        {{ `${index+1}.${i.name}` }}
      </h2>
      <img
        :src="i.pic"
        :alt="i.name"
        class="article-img"
      >
      <p class="article-p">
        {{ i.description }}
      </p>
      <blockquote>
        <p
          v-if="i.link"
          class="article-p"
        >
          项目地址：【<a
            :href="i.link"
            target="_blank"
          >传送门</a>】
        </p>
        <p
          v-else
          class="article-p"
        >
          暂无地址
        </p>
      </blockquote>
    </div>
    <div class="editSign">
      {{ `编辑于${article.timestamp}` }}
    </div>
  </div>
</template>

<script>
import articles from '../assets/article'
export default {
  data() {
    return {
      articles
    }
  },
  computed: {
    article() {
      return this.articles[0]
    }
  }
}
</script>

<style lang="scss" scoped>
.article-container{
  width: 690px;
  text-align:left;
  .article-h1{
    font-weight: 600;
    font-synthesis: style;
    font-size: 24px;
    line-height: 1.22;
    margin: 24px 0;
  }
  .article-h2{
    clear: left;
    margin-top: 2.33333em;
    margin-bottom: 1.16667em;
    font-size: 1.2em;
    line-height: 1.5;
    font-weight: 600;
  }
  .article-img{
    margin: 1.4em 0;
    display: block;
    width: 100%;
  }
  .article-p{
    margin: 1.4em 0;
    line-height: 1.6;
  }
  blockquote{
    margin: 1.4em 0;
    padding-left: 1em;
    color: #646464;
    border-left: 3px solid #d3d3d3;
  }
  .editSign{
    padding: 16px 0;
    font-size: 14px;
    color: #8590a6;
  }
}
</style>
