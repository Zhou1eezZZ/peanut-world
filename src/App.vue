<template>
  <div id="app">
    <my-nav />
    <div class="main-content">
      <el-scrollbar class="page-scrollbar">
        <div class="page-content">
          <el-scrollbar class="page-content-nav">
            <div class="page-content-nav-container">
              <h1 style="font-size:14px;color:#777;height:40px;line-height:40px">
                作者
              </h1>
              <img
                src="https://avatars1.githubusercontent.com/u/30221853?s=460&v=4"
                alt="avator"
                class="avator"
              >
              <ul>
                <router-link
                  to="/"
                  tag="li"
                >
                  Home
                </router-link>
                <router-link
                  to="/article"
                  tag="li"
                >
                  article
                </router-link>
                <router-link
                  to="/poetry"
                  tag="li"
                >
                  Poetry
                </router-link>
                <li>list4</li>
                <li>list5</li>
              </ul>
            </div>
          </el-scrollbar>
          <div class="page-content-container">
            <section class="main-content">
              <router-view />
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
  font-family:'Noto Sans SC','PingFangSC-Regular', Helvetica,"PingFang SC", Tahoma, Arial, "Microsoft YaHei", "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif;
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
            .avator{
              width: 48px;
              height: 48px;
              margin: 10px 0;
            }
            ul{
              transition: opacity .3s;
              opacity: 0.5;
              &:hover{
                opacity: 1;
              }
            }
            ul li{
              font-size: 16px;
              color: #333;
              line-height: 40px;
              height: 40px;
              transition: .15s ease-out;
              font-weight: 700;
              cursor: pointer;
              &:hover{
                background-color: aliceblue;
              }
            }
          }
        }
        &-container{
          padding-left: 270px;
          padding-bottom: 100px;
          box-sizing: border-box;
          .main-content{
            padding-top: 50px;
            h1,h2,h3,p{
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
