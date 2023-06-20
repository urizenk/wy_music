<!--
 * @Author: yff kot123778@163.com
 * @Date: 2023-06-18 17:31:01
 * @LastEditors: yff kot123778@163.com
 * @LastEditTime: 2023-06-19 21:08:26
 * @FilePath: \wy_music\src\App.vue
 * @Description: 
 * 123dot
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <router-view/>
  
</template>

<script>
import MusicPlayer from './components/item/MusicPlayer.vue'
import AppFooter  from './components/item/AppFooter.vue'

export default {
  name: 'App',
  components: {
    // MusicPlayer,
    
  },
};
</script>

<style lang="less">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon {
  width: .4rem;
  height: .4rem
}
</style>
