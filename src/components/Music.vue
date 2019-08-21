<template>
  <div class="container">
    <div
      v-for="(val,key) in VOICE_MAP"
      :key="`level${key}`"
      class="piano-row"
    >
      <span
        v-for="(i,indexArr) in VOICE_MAP[`${key}`]"
        :key="`${indexArr}level${key}`"
        :class="`btn level${key}`"
        @mousedown="playAudio(indexArr,`${key}`)"
        @mouseout="stopAudio()"
        @mouseup="stopAudio()"
      >{{ indexArr+1 }}</span>
    </div>
    <el-divider />
    <el-button
      type="text"
      @click="diyPlay(XIAOXINGYUN)"
    >
      点击播放小幸运
    </el-button>
    <el-button
      type="text"
      @click="diyPlay(DITIEDENGDAI)"
    >
      点击播放地铁等待
    </el-button>
  </div>
</template>

<script>
import { XIAOXINGYUN, DITIEDENGDAI } from '../assets/music'
// 定义音符
const VOICE_MAP = {
  0: [261.63, 293.67, 329.63, 349.23, 391.99, 440, 493.88],
  1: [523.25, 587.33, 659.26, 698.46, 783.99, 880, 987.77],
  2: [1046.5, 1174.66, 1318.51, 1396.92, 1567.98, 1760, 1975.52]
}
export default {
  data() {
    return {
      VOICE_MAP,
      XIAOXINGYUN,
      DITIEDENGDAI,
      audioCtx: null,
      oscillator: null,
      gainNode: null
    }
  },
  created() {
    // 创建音频上下文
    this.audioCtx = new AudioContext()
  },
  methods: {
    playAudio(index, level) {
      // 如果之前有音频正在播，那就清掉之前的音频
      this.gainNode && this.gainNode.gain.setValueAtTime(0, this.audioCtx.currentTime)
      this.oscillator && this.oscillator.stop(this.audioCtx.currentTime + 1)
      // 创建音调控制对象
      this.oscillator = this.audioCtx.createOscillator()
      // 创建音量控制对象
      this.gainNode = this.audioCtx.createGain()
      // 音调音量关联
      this.oscillator.connect(this.gainNode)
      // 音量和设备关联
      this.gainNode.connect(this.audioCtx.destination)
      // 音调类型指定为正弦波，sin好听一些。
      this.oscillator.type = 'sine'
      // 设置音调频率（作曲的关键）
      this.oscillator.frequency.value = this.VOICE_MAP[level][index]
      // 先把当前音量设为0
      this.gainNode.gain.setValueAtTime(0, this.audioCtx.currentTime)
      // 0.01秒时间内音量从0到1线性变化，突然变化会很生硬
      this.gainNode.gain.linearRampToValueAtTime(
        1,
        this.audioCtx.currentTime + 0.01
      )
      // 声音开始
      this.oscillator.start(this.audioCtx.currentTime)
      console.log('level:' + level + 'index:' + (index + 1))
    },
    stopAudio(time = 0.8) {
      // 默认0.8秒后停止声音
      this.gainNode && this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + time)
      this.oscillator && this.oscillator.stop(this.audioCtx.currentTime + time)
      this.oscillator = this.gainNode = null
    },
    // sleep函数，⑧多说
    sleep(delay = 80) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, delay)
      })
    },
    async diyPlay(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].stop) {
          console.log('stop')
          this.stopAudio(0.001)
        } else if (arr[i].delay) {
          console.log('delay')
          let count = 1
          while (arr[i - count].delay) { count++ }
          const { level, index } = arr[i - count]
          this.playAudio(index - 1, level)
        } else {
          const { level, index } = arr[i]
          this.playAudio(index - 1, level)
        }
        await this.sleep(500)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
    width: 728px;
    .btn {
        cursor: pointer;
        display: inline-block;
        width: 100px;
        height: 30px;
        line-height: 30px;
        user-select: none;
        text-align: center;
        border: 1px #a12d21 solid;
        margin: 2px;
    }
    .level0::after {
        content: '.';
        position: relative;
        top: 4px;
        left: -7px;
    }
    .level2::before {
        content: '.';
        position: relative;
        top: -16px;
        left: 7px;
    }
}
</style>
