<!--
 * @Author: yff kot123778@163.com
 * @Date: 2023-06-19 14:41:04
 * @LastEditors: yff kot123778@163.com
 * @LastEditTime: 2023-06-19 20:40:15
 * @FilePath: \wy_music\src\components\item\ItemList.vue
 * @Description: 
 * 123dot
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
    <div class="item-list" >
        <div class="title">
            <div class="play-icon">
                <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-bofang"></use>
                    </svg>
            </div>
            <div class="title-name">
                <span>歌曲列表</span>
                <span>共{{ playlist.trackCount}}首</span>
            </div>
            <div class="colletion">
                <van-button color="#ccc328">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-star"></use>
                    </svg>
                    <span>收藏</span>
                </van-button>
                
            </div>
        </div>
        <div class="items">

        </div>
    </div>
</template>

<script>
export default {
    setup(){

    },
    props:['playlist']
}
</script>

<style lang="less" scoped >
.item-list{

}
</style>