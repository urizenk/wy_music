<!--
 * @Author: yff kot123778@163.com
 * @Date: 2023-06-18 21:45:55
 * @LastEditors: yff kot123778@163.com
 * @LastEditTime: 2023-06-19 15:26:25
 * @FilePath: \wy_music\src\components\home\Icons.vue
 * @Description: 
 * 123dot
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <div class="icons">
        <div class="icon-item">

            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-calendar"></use>
            </svg>
            <span>每日推荐</span>
        </div>
        <div class="icon-item">

            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shouyinji"></use>
            </svg>

            <span>私人FM</span>
        </div>
        <div class="icon-item">

            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gedan"></use>
            </svg>
            <span>歌单</span>
        </div>
        <div class="icon-item">

            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-paihangbang"></use>
            </svg>
            <span>排行榜</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.icons {
    width: 100%;
    height: 2rem;
    display: flex;
    padding: 5px;
    justify-content: space-around;
    align-items: center;

    .icon-item {
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 12px;

        .icon {
            width: 1rem;
            height: 1rem;
        }
    }
}
</style>