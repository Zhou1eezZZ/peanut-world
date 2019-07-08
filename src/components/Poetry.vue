<template>
  <div>
    <section
      v-for="(i,index) in poertyList"
      :key="index"
      class="poetry-card"
    >
      <el-card shadow="hover">
        <p class="poetry-content">
          {{ i.content }}
        </p>
        <p class="poetry-inscription">
          {{ `————《${i.title}》 ${i.dynasty} · ${i.author}` }}
        </p>
      </el-card>
    </section>
  </div>
</template>

<script>
import poertyList from '@/assets/poetry'
export default {
  data() {
    return {
      poertyList
    }
  }
}
</script>

<style lang="scss" scoped>
.poetry-card{
  // font-weight: 700;
  margin-bottom: 20px;
  .poetry-content{
    font-size: 20px;
    text-align: left;
    line-height: 40px;
  }
  .poetry-inscription{
    font-size:16px;
    text-align: right;
  }
}
</style>
