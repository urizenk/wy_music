<template>
    <div class="show-icons">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-heart"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cloud-download"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-faxian"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-pinglunr"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-menu"></use>
        </svg>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.show-icons{
    position: fixed;
    bottom: 60px;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: rgb(255, 255, 255);
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #ccc;
    .icon{
        background-color: white;
        justify-content: space-around;
        width: 1rem;
        height: 1rem;
    }
}
</style>