<template>
    <div class="player">
        <div class="cover">
            <img src="" alt="">
        </div>
        <div class="info">
            <div class="name">歌曲名</div>
            <div class="author">歌手名</div>
        </div>
        <div class="play-icon">
            <router-link :to="{path:'/plays',}">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofang"></use>
                </svg>
            </router-link>

        </div>
        <div class="play-list-icon">
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
.player {
    position: fixed;
    bottom: 60px;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);

    .cover {
        width: 40px;
        height: 40px;
        background-color: #ccc;
        border-radius: 50%;
    }

    .info {
        flex: 1;
        margin-left: 10px;

        .name {
            font-size: 14px;
            color: #333;
        }

        .author {
            font-size: 12px;
            color: #999;
        }
    }

    .play-icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #ccc;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 20px;
            height: 20px;
            fill: #fff;
        }
    }

    .play-list-icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #ccc;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 20px;
            height: 20px;
            fill: #fff;
        }
    }
}</style>