<template>
    <div class="item-music">
        <music-item :playlist="state.playlist"></music-item>
        <item-list :playlist="state.playlist"></item-list>
        <music-player />
        <app-footer /><music-player />
        <app-footer />
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { onMounted, reactive, watch } from 'vue'
import { getItem } from '@/api/apis/item.js'
import MusicItem from '@/components/item/MusicItem.vue'
export default {
    components: { MusicItem },
    setup() {
        const state = reactive({
            playlist: {
            }
        })
        onMounted(async () => {
            let itemId = useRoute().query.id
            let res = await getItem(itemId)
            state.playlist = res.data.playlist
            console.log(state.playlist)
            state.playlist.coverImgUrl += '?param=375y200'
        })
        watch(
            state.playlist,
            async () => {
                let itemId = useRoute().query.id
                let res = await getItem(itemId)
                state.playlist = res.data.playlist
            }
        )
        return {
            state
        }
    }
}
</script>

<style></style>