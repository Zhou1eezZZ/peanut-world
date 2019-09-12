<template>
  <div class="color-font">
    <h1>
      Popular palettes from
      <img
        src="https://colorhunt.co/img/color-hunt-palettes-logo.png"
        alt="colorhunt"
      > Color Hunt
    </h1>
    <div class="cards-wrapper">
      <el-card
        v-for="(item,index) in colorArr"
        :key="index"
        class="color-card"
      >
        <div
          class="color-block block1"
          :style="`background-color:#${item.code.substring(0,6)}`"
        >
          <span
            :data-clipboard-text="`#${item.code.substring(0,6)}`"
            @click="copyOnClick"
          >{{ `#${item.code.substring(0,6)}` }}</span>
        </div>
        <div
          class="color-block block2"
          :style="`background-color:#${item.code.substring(6,12)}`"
        >
          <span
            :data-clipboard-text="`#${item.code.substring(6,12)}`"
            @click="copyOnClick"
          >{{ `#${item.code.substring(6,12)}` }}</span>
        </div>
        <div
          class="color-block block3"
          :style="`background-color:#${item.code.substring(12,18)}`"
        >
          <span
            :data-clipboard-text="`#${item.code.substring(12,18)}`"
            @click="copyOnClick"
          >{{ `#${item.code.substring(12,18)}` }}</span>
        </div>
        <div
          class="color-block block4"
          :style="`background-color:#${item.code.substring(18,24)}`"
        >
          <span
            :data-clipboard-text="`#${item.code.substring(18,24)}`"
            @click="copyOnClick"
          >{{ `#${item.code.substring(18,24)}` }}</span>
        </div>
        <div class="card-tool">
          <el-button plain>
            {{ `💖 ${item.likes}` }}
          </el-button>
          <span>{{ item.date.replace(/\//g,'-') }}</span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import ColorHuntAPI from '@/api/colorhunt'
import Clipboard from 'clipboard'
import colorArr from '@/assets/color'
export default {
  data() {
    return {
      colorArr
    }
  },
  methods: {
    getcolor() {
      const vm = this
      const formData = new FormData()
      formData.append('step', 0)
      formData.append('sort', 'popular')
      formData.append('tags', '')
      ColorHuntAPI.getColor(formData).then(res => {
        if (res.status === 200 && res.data) {
          const code = res.data
            .replace(/<script>/, '')
            .replace(/<\/script>/, '')
          // eslint-disable-next-line
                    let arr = eval(code);
          vm.colorArr = arr
        }
      })
    },
    copyOnClick() {
      const clipboard = new Clipboard('span')
      const vm = this
      clipboard.on('success', e => {
        vm.$message({
          type: 'success',
          message: 'copied',
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
.color-font {
    font-family: 'Rubik', arial;
    h1 {
        font-weight: 600;
        font-synthesis: style;
        font-size: 24px;
        line-height: 1.22;
        margin: 24px 0;
    }
    img {
        width: 24px;
        height: 24px;
    }
}
.cards-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 275px);
    grid-column-gap: 20px;
    .color-card {
        width: 260px;
        height: 320px;
        margin: 8px;
        padding: 15px;
        box-sizing: border-box;
        .color-block {
            width: 100%;
            cursor: pointer;
            position: relative;
            &:hover {
                span {
                    opacity: 1;
                }
            }
            span {
                position: absolute;
                text-align: center;
                transition: all 0.2s;
                bottom: 0;
                left: 0;
                color: #fff;
                opacity: 0;
                text-transform: uppercase;
                background-color: rgba(0, 0, 0, 0.1);
                padding: 3px 6px;
                border-radius: 0 3px 0 0;
                cursor: pointer;
                letter-spacing: 1px;
            }
        }
        .block1 {
            height: 94px;
        }
        .block2 {
            height: 60px;
        }
        .block3 {
            height: 40px;
        }
        .block4 {
            height: 35px;
        }
        .card-tool {
            margin-top: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
                font-size: 12px;
                color: #899bb4;
            }
        }
    }
}
/deep/ .el-card__body {
    padding: 0;
}
</style>
