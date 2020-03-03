<template>
    <div class="nav-wrapper">
        <div class="nav">
            <div class="container">
                <img src="../../public/peanut.webp" />
                <!-- <h1>peanuts</h1> -->
                <h1>PeanuTn-T</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1500;
    .nav {
        height: 80px;
        background-color: #fff;
        top: 0;
        left: 0;
        width: 100%;
        line-height: 80px;
        z-index: 100;
        position: relative;
        .container {
            width: 1140px;
            margin: 0 auto;
            height: 100%;
            box-sizing: border-box;
            border-bottom: 1px dashed #dcdfe6;
            img {
                float: left;
                margin: 20px 5px;
                width: 40px;
            }
            h1 {
                float: left;
                font-size: 36px;
                font-family: 'Kalam', sans-serif !important;
            }
        }
    }
}
</style>
