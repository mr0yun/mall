<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick='titleClick' ref="nav"/>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
      <detail-swiper :banners='topImages' @swiperImgLoad="imgLoad"/>
      <detail-base-info :goods='goods'/>
      <detail-shop-info :shop='shop'/>
      <detail-goods-info :detailInfo='detailInfo' @imageLoad='imgLoad'/>
      <detail-params :paramInfo='paramInfo' ref="param"/>
      <detail-comment-info :commentInfo='commentInfo' ref="comment"/>
      <div class="recommend-title" ref="recommend">{{recommendTitle}}</div>
      <goods-list :goods="recommends" class="goods-list"/>
    </scroll>
    <detail-bottom-bar @addToCart='addToCart'/>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParams from './childComps/DetailParams'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'

import {getDetail, getRecommend, Goods, Shop, GoodsParam} from 'network/detail'
import {debounce} from '@/common/utils'
import {itemListenerMixin, backTopMixin} from '@/common/mixin'
import { ADD_CART } from "@/store/mutation-types";
import {mapActions} from 'vuex'


export default {
  name: 'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParams,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
  },
  mixins: [itemListenerMixin, backTopMixin],
  data(){
    return{
      recommendTitle: '推荐',
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      // itemImgListener: null,
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
    }
  },
  created(){
    this.iid = this.$route.params.iid;

    getDetail(this.iid).then((res)=>{
      // console.log(res)
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      // 获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // 创建店铺信息的对象
      this.shop = new Shop(data.shopInfo);
      // 商品的详情信息
      this.detailInfo = data.detailInfo;
      // 商品的参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
      // 商品的评论信息
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0];
      }    
    });
    // 获取推荐信息 
    getRecommend().then((res)=>{
      this.recommends = res.data.list;
    })
  },
  mounted() {
    this.getThemeTopY = debounce(()=>{
      // DOM渲染完了，但是图片没有加载完成this.$nextTick
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.param.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.offsetTop);
    }, 300);
  },
  destroyed() {
    this.$bus.$off('itemImgLoad', this.itemImgListener);
  },
  methods: {
    ...mapActions([ADD_CART]),
    imgLoad(){
      this.newRefresh();
      this.getThemeTopY();
    },
    titleClick(index){
      this.currentIndex = index;
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500);
    },
    contentScroll(position){
      const positionY = - position.y;
      if(this.currentIndex < 3 && positionY >= this.themeTopYs[this.currentIndex+1]){
        this.currentIndex++;
      }
      else if(this.currentIndex > 0 && positionY < this.themeTopYs[this.currentIndex]){
        this.currentIndex--;
      }
      this.$refs.nav.currentIndex = this.currentIndex;
      
      // 判断backTop是否显示
      this.isShowBackTop = (-position.y) > 1000;
    },
    addToCart(){
      // 获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      product.count = 1;
      product.checked = true;

      // 将商品添加到购物车
      /* this.$store.dispatch('addCart', product).then(res => {
        console.log(res);
      });  */
      this.addCart(product).then(res => {
        // console.log(res);
        this.$toast.show(res, 1000);
      });
    }
  },
}
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 12;
    background-color: white;
    height: 100vh;
  }

  .detail-nav{
    position: relative;
    z-index: 9;
  }

  .content{
    /* height: calc(100% - 44px); */
    position:absolute;
    top: 2.85rem;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  .recommend-title{
    padding: 0.75rem 0.75rem;
    color: #333;
    border-bottom: 0.3125rem solid #f2f5f8;
    text-align: center;
    color: var(--color-high-text);
  }
  .recommend-title::before{
    content:"";
    width: 4rem;
    height:0.5rem;
    color: var(--color-high-text);
    position: absolute;
    transform: translateX(-50%) translateY(-150%);
    border-bottom: 1px solid var(--color-high-text);
  }
  .recommend-title::after{
    content:"";
    width: 4rem;
    height:0.5rem;
    color: var(--color-high-text);
    position: absolute;
    transform: translateX(-50%) translateY(200%);
    border-bottom: 1px solid var(--color-high-text);
  }
</style>