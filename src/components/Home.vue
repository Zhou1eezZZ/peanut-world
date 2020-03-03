<template>
    <div>
        <h1>Welcome to peanut's world!</h1>
        <!-- <img
      src="../assets/homepage.webp"
      alt="homePagePic"
      width="50%"
    > -->
        <el-button @click="handleBtnClick('111')">
            节流按钮
        </el-button>
        <el-input v-model="input" style="margin-left:20px;width:300px" />
    </div>
</template>

<script>
import { throttle, debounce } from '../utils/tool'

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
}
target.target = target
export default {
    data() {
        return {
            input: ''
        }
    },
    watch: {
        input: debounce(value => {
            if (value.trim()) {
                console.log('search:' + value)
            }
        }, 1000)
    },
    mounted() {
        // console.log(this.clone(target))
    },
    methods: {
        // 深拷贝函数
        // WeakMap与Map不同的地方在于，其键必须是对象，键是弱引用，因此会在键对象消失后自动释放内存
        clone(target, map = new WeakMap()) {
            if (typeof target === 'object') {
                const cloneTarget = Array.isArray(target) ? [] : {}
                if (map.get(target)) {
                    return map.get(target)
                }
                map.set(target, cloneTarget)
                for (const key in target) {
                    cloneTarget[key] = this.clone(target[key], map)
                }
                console.log(map)
                return cloneTarget
            } else {
                return target
            }
        },
        handleBtnClick: throttle(msg => {
            console.log(msg)
        }, 1000)
    }
}
</script>

<style lang="scss" scoped>
h1 {
    font-weight: 600;
    font-synthesis: style;
    font-size: 24px;
    line-height: 1.22;
    margin: 24px 0;
}
</style>
