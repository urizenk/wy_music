<template>
    <div class="music-item">
        <div class="top-nav">
            <div class="left">
                <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                    <use xlink:href="#icon-left"></use>
                </svg>

            </div>
            <div class="center">
                <span>歌单</span>
            </div>
            <div class="right">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-sousuo"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-menu"></use>
                </svg>
            </div>
        </div>
        <div class="content">
            <div class="left-img">
                <img :src="playlist.coverImgUrl" alt="">
            </div>
            <div class="right-info">
                <div class="title">{{ playlist.name }}</div>
                <div class="author">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-right"></use>
                    </svg>
                </div>
                <div class="desc">{{ playlist.description }}</div>
            </div>

        </div>
        <div class="icons">
            <div class="icon">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-star"></use>
                </svg>
                <span>收藏</span>
            </div>
            <div class="icon">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-share"></use>
                </svg>
                <span>分享</span>
            </div>
            <div class="icon">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-customerservice"></use>
                </svg>
                <span>下载</span>
            </div>
            <div class="icon">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-pinglun"></use>
                </svg>
                <span>评论</span>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, computed } from 'vue'

export default {
    setup(props ) {
        
        //遍历props.playlist的所有属性，并打印他们的值
        for (let key in props.playlist) {
            console.log(key, props.playlist[key])
        }
    },
    props: ['playlist']
}
</script>

<style lang="less">
.music-item {
    .top-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.2rem;
        height: 0.8rem;
        .left {
            font-size: 0.4rem;
            color: #999;
        }
        .center {
            font-size: 0.4rem;
            font-weight: bold;
        }
        .right {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 1.2rem;
            font-size: 0.4rem;
            color: #999;
        }
    }
    .content {
        justify-content: space-between;
        align-items: center;
        padding: 0 0.2rem;
        height: 2.4rem;
        .left-img {
            width: 2.4rem;
            height: 2.4rem;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .right-info {
            flex: 1;
            padding: 0 0.2rem;
            .title {
                font-size: 0.4rem;
                font-weight: bold;
            }
            .author {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 0.2rem 0;
                .icon {
                    width: 0.4rem;
                    height: 0.4rem;
                }
            }
            .desc {
                font-size: 0.3rem;
                color: #999;
            }
        }
    }
    .icons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.2rem;
        height: 0.8rem;
        .icon {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 1.2rem;
            font-size: 0.4rem;
            color: #999;
        }
    }
}
</style>