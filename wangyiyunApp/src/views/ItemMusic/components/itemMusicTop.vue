<template>
  <div class="itemMusicTop">
    <img :src="playList.playlist.coverImgUrl" class="bgImg" alt="">
    <div class="itemLeft">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="itemRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao"></use>
      </svg>
    </div>
  </div>
</template>

<script setup lang='ts'>

type Props = {
  playList: {playlist:{coverImgUrl:string}}
}
defineProps<Props>();

</script>

<style lang="less" scoped>
.itemMusicTop{
  position: relative;
  width: 100%;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .itemLeft,.itemRight{
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 .2rem;
    span {
      font-size: .4rem;
      color: #fff;
    }
    .icon{
      fill: #fff;
    }
  }
  .bgImg{
    width: 100%;
    height: 8rem;
    position: fixed;
    z-index: -1;
    filter: blur(30px);
  }
}
</style>