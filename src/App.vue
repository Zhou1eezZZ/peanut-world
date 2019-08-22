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
                title="前往作者github主页"
                @click="clickToGithub"
              >
              <ul>
                <router-link
                  v-for="(i,index) in routerList"
                  :key="index"
                  :to="`/${i}`"
                  tag="li"
                  :class="{'active':activeTab===i}"
                  @click.native="setActiveTab(i)"
                >
                  {{ i.charAt(0).toUpperCase()+i.slice(1) }}
                </router-link>
              </ul>
            </div>
          </el-scrollbar>
          <div class="page-content-container">
            <section class="main-content">
              <transition
                name="fade"
                mode="out-in"
                appear
              >
                <router-view />
              </transition>
            </section>
          </div>
        </div>
      </el-scrollbar>
    </div>
    <el-backtop target=".page-scrollbar .el-scrollbar__wrap" />
  </div>
</template>

<script>
import myNav from '@/components/nav'
export default {
  name: 'App',
  components: {
    myNav
  },
  data() {
    return {
      activeTab: 'home',
      routerList: [
        'home',
        'article',
        'poetry',
        'joke',
        'color',
        'music',
        'lab'
      ]
    }
  },
  mounted() {
    // 路由跳转时将页面滚动到顶部（由于使用了el-scrollbar，window.scrollTo(0,0)无效）
    this.$router.afterEach((to, from, next) => {
      const el = document.querySelector(
        '.page-scrollbar .el-scrollbar__wrap'
      )
      el.scrollTop = 0
    })
  },
  methods: {
    clickToGithub() {
      window.open('https://github.com/Zhou1eezZZ')
    },
    setActiveTab(tabName) {
      this.activeTab = tabName
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
    font-family: 'Noto Sans SC', Helvetica, 'PingFang SC', Tahoma, Arial,
        'Microsoft YaHei', 'Hiragino Sans GB', 'WenQuanYi Micro Hei', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    overflow: hidden;
    overflow-y: hidden;
    .main-content {
        padding: 0;
        margin-top: 0;
        height: 100%;
        min-height: auto;
        .page-scrollbar {
            height: calc(100% - 80px);
            margin-top: 80px;
            .page-content {
                width: 1140px;
                padding: 0;
                margin: 0 auto;
                &-nav {
                    width: 240px;
                    position: fixed;
                    top: 0;
                    bottom: 0;
                    margin-top: 80px;
                    transition: padding-top 0.3s;
                    &-container {
                        height: 100%;
                        margin-top: 50px;
                        margin-bottom: 50px;
                        padding-right: 0;
                        text-align: left;
                        .avator {
                            width: 48px;
                            height: 48px;
                            margin: 10px 0;
                            cursor: pointer;
                        }
                        ul {
                            transition: opacity 0.3s;
                            opacity: 0.5;
                            &:hover {
                                opacity: 1;
                            }
                            .active {
                              background-color: aliceblue;
                              margin-left: 10px;
                            }
                        }
                        ul li {
                            font-size: 16px;
                            color: #333;
                            line-height: 40px;
                            height: 40px;
                            transition: 0.15s ease-out;
                            font-weight: 700;
                            cursor: pointer;
                            &:hover {
                              background-color: aliceblue;
                              margin-left: 10px;
                            }
                        }
                    }
                }
                &-container {
                    padding-left: 270px;
                    padding-bottom: 100px;
                    box-sizing: border-box;
                    .main-content {
                        padding-top: 50px;
                        h1,
                        h2,
                        h3,
                        p {
                            height: 500px;
                        }
                    }
                }
            }
        }
    }
}
/deep/ .el-scrollbar__wrap {
    overflow-x: hidden;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
