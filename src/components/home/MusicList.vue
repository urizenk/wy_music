<template>
  <div class="music-top">
    <div class="title" id="gedan">发现好歌单</div>
    <div class="more">查看更多</div>
  </div>
  <div class="windows">
    <van-swipe :loop="false" :width="100" :height="100" clsss="my-swiper">
      <van-swipe-item v-for="item in state.values" :key="item">
        <router-link :to="{path:'/itemMusic', query:{id: item.id}}" >
          <img :src="item.picUrl" alt="">
          <span class="play-count">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-play-circle"></use>
            </svg>
            {{ item.playCount }}
          </span>
          <span class="content">{{ item.name }}</span>
        </router-link>
      </van-swipe-item>

    </van-swipe>
  </div>
</template>

<script>
import { getMusicList } from '@/api/apis/home.js'
import { reactive, onMounted } from 'vue'
export default {
  setup() {
    const state = reactive({
      values: [],
    });
    onMounted(async () => {
      let res = await getMusicList(10)
      state.values = res.data.result
      //遍历values,给每个对象的picUrl后边加上查询参数“param=50y50”
      state.values.forEach(item => {
        item.picUrl += '?param=70y70'
      });
      
    });
    // console.log(state.values)
    return {
      state
    }
  },
}
</script>

<style lang="less" scoped>
.music-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;

  .title {
    font-size: 0.4rem;
    font-weight: bold;
  }

  .more {
    font-size: 0.3rem;
    color: #999;
  }


}

.windows {

  height: 200px;
  width: 100%;

  .my-swiper {
    height: 100px;
    width: 100%;

    .van-swipe__track {
      height: auto;
      width: auto;

      .van-swipe-item {
        width: 100%px;
        height: 100%;
        margin-right: 0.2rem;

        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }

        .play-count {
          position: absolute;
          top: 0.2rem;
          left: 0.2rem;
          color: #fff;
          font-size: 0.3rem;
          display: flex;
          align-items: center;
        }

        .content {
          position: absolute;
          bottom: 0.2rem;
          left: 0.2rem;
          color: #fff;
          font-size: 0.3rem;
        }
      }
    }
  }
}
</style>