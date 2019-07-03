<template>
  <div id="app">
    <my-nav />
    <div class="main-content">
      <el-scrollbar class="page-scrollbar">
        <div class="page-content">
          <el-scrollbar class="page-content-nav">
            <div class="page-content-nav-container">
              <ul>
                <li>list1</li>
                <li>list2</li>
                <li>list3</li>
                <li>list4</li>
                <li>list5</li>
              </ul>
            </div>
          </el-scrollbar>
          <div class="page-content-container">
            <section class="main-content">
              <h2>content title</h2>
              <h3>content subtitle</h3>
              <p>content details</p>
            </section>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import myNav from '@/components/nav'
export default {
  name: 'App',
  components: {
    myNav
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  overflow: hidden;
  overflow-y: hidden;
  .main-content{
    padding: 0;
    margin-top: 0;
    height: 100%;
    min-height: auto;
    .page-scrollbar{
      height: calc(100% - 80px);
      margin-top: 80px;
      .page-content{
        width: 1140px;
        padding: 0;
        margin: 0 auto;
        &-nav{
          width: 240px;
          position: fixed;
          top: 0;
          bottom: 0;
          margin-top: 80px;
          transition: padding-top .3s;
          &-container{
            height: 100%;
            padding-top: 50px;
            padding-bottom: 50px;
            padding-right: 0;
            text-align: left;
            ul li{
              height: 400px;
            }
          }
        }
        &-container{
          padding-left: 270px;
          padding-bottom: 100px;
          box-sizing: border-box;
          .main-content{
            padding-top: 50px;
            h2,h3,p{
              height: 500px;
            }
          }
        }
      }
    }
  }
}
/deep/ .el-scrollbar__wrap{
  overflow-x: hidden;
}
</style>
