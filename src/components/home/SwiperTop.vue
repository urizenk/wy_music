<template>
    <div class="swiper-top">
        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in state.images" :key="image">
                <img :src="image.pic" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import { reactive, onMounted } from 'vue';
import { getBanner } from '@/api/apis/home.js'
export default {
    setup() {
        const state = reactive({
            images: [],
        });
        onMounted(async () => {
            let res = await getBanner(2)
            state.images = res.data.banners
        })
        return { state }
    },
};
</script>

<style lang="less" scoped>
.van-swipe {
    width: 100%;
    height: 200px;

    .van-swipe__track {
        .van-swipe-item {
            padding: 0 0.2rem;
            align-self: center;

            img {
                width: 100%;
                height: 200px;
                border-radius: 10px
            }
        }
    }

    ;

    .van-swipe__indicator--active {
        background-color: rgb(195, 43, 16);
    }
}
</style>