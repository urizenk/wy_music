<template>
  <div class="juke-box">
    能旋转的唱片机
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.juke-box{
    position: fixed;
    top: 60px;
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