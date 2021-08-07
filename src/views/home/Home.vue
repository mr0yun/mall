<template>
<div id="home">
  <nav-bar class='home-nav'><div slot="center">首页</div></nav-bar>
  <tab-control :titles="titles" class="control" @tabClick="tabClick" ref="tabControl1" v-show="isTabFixed"/>
    <scroll class="content" ref="scroll" :probeType="3" :pullUpLoad="true" @scroll="contentScroll" @pullingUp="pullUpData">
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="titles" class="tab-control" @tabClick="tabClick" ref="tabControl2"/>
      <goods-list :goods="showGoods" class="goods-list"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
</div>
  
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView.vue'

import {getHomeMultidata, getHomeGoods} from 'network/home'
import {itemListenerMixin, backTopMixin} from '@/common/mixin'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ['流行', '新款', '精选'],
      goods:{
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
        'currentType': 'pop',
      },
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
      // itemImgListener: null,
    }
  },
  created() {
    // 请求数据
    this.getHomeMultidataM();
    this.getHomeGoodsM('pop');
    this.getHomeGoodsM('new');
    this.getHomeGoodsM('sell');
  },
  mounted() {
    /* const refresh = debounce(this.$refs.scroll.refresh, 500);
    this.itemImgListener = ()=>{
      // this.$refs.scroll.scroll.refresh();
      refresh();
    };
    // 监听图片加载
    this.$bus.$on('itemImgLoad', this.itemImgListener); */

    // 获取tab-control的offsetTop
    // this.tabOffsetTop = this.$refs.TabControl.$el
    
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
    this.$bus.$on('itemImgLoad', this.itemImgListener);
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
    this.$bus.$off('itemImgLoad', this.itemImgListener);
  },
  computed:{
    showGoods(){
      return this.goods[this.goods['currentType']].list;
    }
  },
  methods:{
    /**
     * 网络请求相关
     */
    getHomeMultidataM(){
      getHomeMultidata().then(res=> {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      // console.log(this.banners, this.recommends);
    }).catch(err => {
      console.log(err);
    });
    },

    getHomeGoodsM(type){
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res=> {
      let list = res.data.list;
      // console.log(list)
      this.goods[type].list.push(...list);
      this.goods[type].page = page;
    }).catch(err => {
      console.log(err);
    });
    },

    /**
     * 事件监听相关
     */
    tabClick(index){
      switch(index){
        case 0:
          this.goods['currentType'] = 'pop';
          break;
        case 1:
          this.goods['currentType'] = 'new';
          break;
        case 2:
          this.goods['currentType'] = 'sell';
          break;
      };
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    contentScroll(position){
      // 判断backTop是否显示
      this.isShowBackTop = (-position.y) > 1000;
      
      // 判断tab-control是否吸顶
      this.isTabFixed = (-position.y) >= this.tabOffsetTop;
    },

    pullUpData(){
      this.getHomeGoodsM(this.goods['currentType']);
      this.$refs.scroll.refresh();
    },

    swiperImgLoad(){
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    }
  }
}
</script>

<style scoped>
#home{
  height: 100vh;
  position: relative;
}
.home-nav{
  font-size: 1.125rem;
  background-color: var(--color-tint);
  color: white;
  box-shadow: 0 1.5px 1px rgb(90, 90, 90);

/* 浏览器原生滚动   
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9; */
}
.tab-control{
/*   position: sticky;
  top: 2.85rem; */
  background-color: white;
}

.control{
  background-color: white;
  position: relative;
  z-index: 9;
}

/* .goods-list{
  width: 100%;
  overflow: hidden;
} */

.content{
/*   height: calc(100% - 5.85rem); */
  position:absolute;
  top: 2.85rem;
  bottom: 3rem;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>