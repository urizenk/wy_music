<!--
 * @Author: yff kot123778@163.com
 * @Date: 2023-06-18 18:35:04
 * @LastEditors: yff kot123778@163.com
 * @LastEditTime: 2023-06-18 20:48:41
 * @FilePath: \wy_music\src\components\home\TopNav.vue
 * @Description: 
 * 123dot
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="topNav">
    <div class="topLeft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </div>

    <div class="title">
      <span>我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <div class="topRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang=less scoped>
.topNav {
  width: 100%;
  height: 50px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title {
    width: 65%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;

    .active {
      font-weight: 900;
    }
  }

}

.icon {
  width: .4rem;
  height: .4rem
}</style>