<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in banners" :key="item" class="swiper-item">
      <img :src="item" alt="" @load="imgLoad">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name: 'DetailSwiper',
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    banners: {
      type: Array,
      default(){
        return [];
      }
    }
  },
  data(){
    return{
      isLoad: false
    }
  },
  methods: {
    imgLoad(){
      if(!this.isLoad){
        this.$emit('swiperImgLoad');
        this.isLoad = true;
      }
    }
  },
}
</script>

<style scoped>
  .detail-swiper{
    height: 20rem;
    overflow: hidden;
  }
</style>