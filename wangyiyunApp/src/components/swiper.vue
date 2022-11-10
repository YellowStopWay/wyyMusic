<template>
  <div id="swiper">
    <van-swipe :autoplay="3000" lazy-render indicator-color="#db8282">
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, reactive } from 'vue';
import { homeSwiperApi } from '../utils/request/api'
const state = reactive<{images: {pic?:string}[]}>({
  images: []
})

onMounted(async () => {
  let res = await homeSwiperApi()
  if(res.banners){
    state.images = res.banners
  }
  console.log(state.images);
})
</script>

<style lang="less" >
#swiper {
  .van-swipe {
    width: 100%;
    height: 3rem;
    .van-swipe-item {
      padding: 0;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.2rem;
      }
    }
  }
}
</style>