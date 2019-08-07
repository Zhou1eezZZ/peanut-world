<template>
  <div>
    <section
      v-for="(i,index) in poertyList"
      :key="index"
      class="poetry-card"
      :data-clipboard-text="`${i.content}————《${i.title}》 ${i.dynasty} · ${i.author}`"
      @click="copyOnClick"
    >
      <el-card shadow="hover">
        <p class="poetry-content">
          {{ i.content }}
        </p>
        <p class="poetry-inscription">
          {{ `《${i.title}》 ${i.dynasty} · ${i.author}` }}
        </p>
      </el-card>
    </section>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
import poertyList from '@/assets/poetry'
export default {
  data() {
    return {
      poertyList
    }
  },
  methods: {
    copyOnClick() {
      const clipboard = new Clipboard('.poetry-card')
      const vm = this
      clipboard.on('success', e => {
        vm.$message({
          type: 'success',
          message: '复制诗句到剪切板成功',
          duration: 1000
        })
        e.clearSelection()
        clipboard.destroy()
      })
      clipboard.on('error', e => {
        vm.$message({
          type: 'warning',
          message: '浏览器不支持自动复制',
          duration: 1000
        })
        clipboard.destroy()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.poetry-card {
    margin-bottom: 20px;
    .poetry-content {
        font-size: 16px;
        text-align: left;
        line-height: 40px;
    }
    .poetry-inscription {
        font-size: 16px;
        text-align: right;
    }
}
</style>
