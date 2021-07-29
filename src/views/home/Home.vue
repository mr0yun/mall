<template>
<div id="home">
  <nav-bar class='home-nav'>
    <div slot="center">购物车</div>
  </nav-bar>
  <home-swiper :banners="banners"></home-swiper>
  <recommend-view :recommends="recommends"></recommend-view>
</div>
  
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import {getHomeMultidata} from 'network/home'
export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      banners: [],
      dKeyword: [],
      keywords: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(res=> {
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
      // console.log(this.banners, this.recommends);
    }).catch(err => {
      console.log(err);
    })
  },
}
</script>

<style scoped>
.home-nav{
  font-size: 1.125rem;
  background-color: var(--color-tint);
  color: white;
}
</style>