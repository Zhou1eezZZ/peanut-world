<template>
  <div class="nav-wrapper">
    <div class="nav">
      <div class="container">
        <h1>🥜peanuts</h1>
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
      border-bottom: 1px solid #dcdfe6;
      h1 {
        float: left;
        font-size: 36px;
        font-family: 'Ubuntu', sans-serif!important;
      }
    }
  }
}
</style>
