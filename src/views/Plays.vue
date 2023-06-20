<!--
 * @Author: yff kot123778@163.com
 * @Date: 2023-06-19 20:53:44
 * @LastEditors: yff kot123778@163.com
 * @LastEditTime: 2023-06-19 20:53:56
 * @FilePath: \wy_music\src\views\Plays.vue
 * @Description: 
 * 123dot
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <div class="music-playes">
    <top-ttile/>
    <juke-box/>
    <show-icons/>
    <app-player/>
  </div>
</template>

<script>
import TopTtile from '@/components/player/TopTtile.vue'
import JukeBox from '@/components/player/JukeBox.vue'
export default {
  components: { TopTtile, JukeBox },

}
</script>

<style>

</style>