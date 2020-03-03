<template>
    <div class="article-container">
        <el-page-header content="文章详情" style="margin-bottom:2em" @back="goBack" />
        <div class="markdown-body" v-html="mdConent" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            mdConent: '',
            articleId: ''
        }
    },
    created() {
        this.articleId = this.$route.params.id
        this.getMarkdownFileContent()
    },
    methods: {
        getMarkdownFileContent() {
            const vm = this
            Promise.resolve(import(`../markdown/article${vm.articleId}.md`)).then(
                article => {
                    console.log(article)
                    vm.mdConent = article.default
                },
                () => {
                    vm.$message({
                        type: 'error',
                        message: '读取文章md文件失败！'
                    })
                    vm.$router.push({ path: '/article' })
                }
            )
        },
        goBack() {
            this.$router.push({ path: '/article' })
        }
    }
}
</script>

<style lang="scss" scoped>
.article-container {
    width: 690px;
    text-align: left;
}
</style>
