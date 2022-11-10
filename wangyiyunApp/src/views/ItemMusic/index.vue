<template>
  <itemMusicTop :playList="playList"></itemMusicTop>
</template>

<script setup lang='ts'>
import { onMounted,reactive,toRefs } from 'vue';
import { useRoute } from 'vue-router';
import { listDetailApi } from '../../utils/request/api'
import itemMusicTop from './components/itemMusicTop.vue'
const state = reactive<{playList:{playlist:{coverImgUrl:string}}  }>({
   playList: {
    playlist:{
      coverImgUrl: ''
    }
   }
})
const { playList } = toRefs(state)
onMounted(async() => {
  const id = useRoute().query.id as string;
  if(id){
    const res = await listDetailApi(id)
    if(res.code === 200){
      playList.value = res as any;
      console.log(playList);
    }
  }
})
</script>

