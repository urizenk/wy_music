<!--
 * @Author: yff kot123778@163.com
 * @Date: 2023-06-19 20:56:41
 * @LastEditors: yff kot123778@163.com
 * @LastEditTime: 2023-06-19 21:06:09
 * @FilePath: \wy_music\src\components\item\footer.vue
 * @Description: 
 * 123dot
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <div class="app-footer">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-compass"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-customerservice"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-home"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-user"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-crown"></use>
        </svg>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.app-footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: rgb(255, 255, 255);
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #ccc;
    .icon{
        background-color: red;
        justify-content: space-around;
        width: 1rem;
        height: 1rem;
    }
}
</style>