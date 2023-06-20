<!--
 * @Author: yff kot123778@163.com
 * @Date: 2023-06-19 21:26:20
 * @LastEditors: yff kot123778@163.com
 * @LastEditTime: 2023-06-19 21:39:43
 * @FilePath: \wy_music\src\components\player\AppPlayer.vue
 * @Description: 
 * 123dot
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="app-player">
    <div class="progess">
        <div class="time">00:00</div>
        <div class="progress-bar">
            <div class="progress-bar-inner"></div>
        </div>
        <div class="time">00:00</div>
    </div>
    <div class="music-player">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liebiaoxunhuan"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shangyishou"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zanting"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiayishou"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-indent"></use>
        </svg>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.app-player{
    position: fixed;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: rgb(255, 255, 255);
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #ccc;
    .icon{
        background-color: white;
        justify-content: space-around;
        width: 1rem;
        height: 1rem;
    }
}

</style>