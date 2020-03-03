<template>
    <div class="color-font">
        <h1>
            <el-dropdown @command="handleCommand" trigger="click">
                <p>{{ sortTitle }}<i class="el-icon-arrow-down el-icon--right"></i></p>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                        v-for="(item, i) in sorts"
                        :key="i"
                        :command="item.value"
                        :disabled="sort === item.value"
                        >{{ item.label }}</el-dropdown-item
                    >
                </el-dropdown-menu>
            </el-dropdown>
            palettes from
            <img src="https://colorhunt.co/img/color-hunt-palettes-logo.png" alt="colorhunt" />
            Color Hunt
        </h1>
        <div class="cards-wrapper">
            <transition-group name="fade" tag="div" class="cards-wrapper">
                <el-card v-for="item in colorArr" :key="item.id" class="color-card">
                    <div
                        class="color-block block1"
                        :style="`background-color:#${item.code.substring(0, 6)}`"
                    >
                        <span
                            :data-clipboard-text="`#${item.code.substring(0, 6)}`"
                            @click="copyOnClick"
                            >{{ `#${item.code.substring(0, 6)}` }}</span
                        >
                    </div>
                    <div
                        class="color-block block2"
                        :style="`background-color:#${item.code.substring(6, 12)}`"
                    >
                        <span
                            :data-clipboard-text="`#${item.code.substring(6, 12)}`"
                            @click="copyOnClick"
                            >{{ `#${item.code.substring(6, 12)}` }}</span
                        >
                    </div>
                    <div
                        class="color-block block3"
                        :style="`background-color:#${item.code.substring(12, 18)}`"
                    >
                        <span
                            :data-clipboard-text="`#${item.code.substring(12, 18)}`"
                            @click="copyOnClick"
                            >{{ `#${item.code.substring(12, 18)}` }}</span
                        >
                    </div>
                    <div
                        class="color-block block4"
                        :style="`background-color:#${item.code.substring(18, 24)}`"
                    >
                        <span
                            :data-clipboard-text="`#${item.code.substring(18, 24)}`"
                            @click="copyOnClick"
                            >{{ `#${item.code.substring(18, 24)}` }}</span
                        >
                    </div>
                    <div class="card-tool">
                        <el-button plain>
                            {{ `💖 ${item.likes}` }}
                        </el-button>
                        <span>{{ item.date.replace(/\//g, '-') }}</span>
                    </div>
                </el-card>
            </transition-group>
        </div>
    </div>
</template>

<script>
import { getColor } from '@/api/colorhunt'
import Clipboard from 'clipboard'

export default {
    data() {
        return {
            colorArr: [],
            step: 0,
            sort: 'new',
            sorts: [
                { label: 'New', value: 'new' },
                { label: 'Trendy', value: 'trendy' },
                { label: 'Popular', value: 'popular' },
                { label: 'Random', value: 'random' }
            ],
            loading: false
        }
    },
    computed: {
        sortTitle() {
            return this.sorts.find(e => e.value === this.sort).label
        }
    },
    mounted() {
        this.getColor()
        window.addEventListener('scroll', this.listenScrollbar, true)
    },
    destroyed() {
        window.removeEventListener('scroll', this.listenScrollbar, true)
    },
    methods: {
        async getColor(flag = false) {
            if (this.loading) return
            try {
                const vm = this
                const formData = new FormData()
                formData.append('step', this.step)
                formData.append('sort', this.sort)
                formData.append('tags', '')
                this.loading = true
                await getColor(formData).then(res => {
                    if (res.status === 200 && res.data) {
                        const code = res.data.replace(/<script>/, '').replace(/<\/script>/, '')
                        // eslint-disable-next-line
                        let arr = eval(code)
                        if (flag) {
                            vm.colorArr = vm.colorArr.concat(arr)
                        } else {
                            vm.colorArr = arr
                        }
                    }
                })
            } catch (error) {
                this.$message.error('获取颜色出错')
            } finally {
                this.loading = false
            }
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
            clipboard.on('error', () => {
                vm.$message({
                    type: 'warning',
                    message: '浏览器不支持自动复制',
                    duration: 1000
                })
                clipboard.destroy()
            })
        },
        handleCommand(value) {
            this.sort = value
            this.step = 0
            this.getColor()
        },
        onReachButton() {
            if (this.loading) return
            this.step = this.step + 1
            this.getColor(true)
        },
        listenScrollbar() {
            const bodyScrollHeight = document.body.scrollHeight // 浏览器可见高度
            const el = document.querySelector('.page-scrollbar .el-scrollbar__wrap')
            if (el.scrollTop >= el.scrollHeight - bodyScrollHeight - 200) {
                this.onReachButton()
            }
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
    p {
        font-size: 24px;
        cursor: pointer;
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
