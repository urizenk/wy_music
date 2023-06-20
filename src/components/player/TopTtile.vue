<template>
  <div class="top-title">
    <div class="dorp-icon">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-downr"></use>
      </svg>
    </div>
    <div class="title">
      <span>歌名</span>
      <span>歌手名</span>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-right"></use>
      </svg>
    </div>
    <div class="share-icon">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-share"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.top-title{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: rgb(255, 255, 255);
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #ccc;
    .icon{
        background-color: red;
        justify-content: space-around;
        width: 1rem;
        height: 1rem;
    }
}
</style>