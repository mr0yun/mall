<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" alt=""  @load="imgLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price | showPrice}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {};
      } 
    }
  },
  computed:{
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  },
  filters: { // 局部过滤器：插值和v-bind 以|分割参数和过滤器，要过滤的数据永远是第一个数据
    showPrice(price) {
      return "￥" + price;
    }
  },
  methods: {
    imgLoad(){
      // if(this.$route.path.indexOf('/home')){
        this.$bus.$emit('itemImgLoad');
      // }
    },
    itemClick(){
      this.$router.push({
        path: '/detail/' + this.goodsItem.iid,
      })
    }
  },
}
</script>

<style scoped>
  .goods-item {
    position: relative;
    width: 48%;
    height: auto;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 0.5rem;
  }

  .goods-item img {
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    overflow: hidden;
    padding: 8px 0 8px;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 8px;
  }

  .goods-info .price {
    font-size: 1.2em;
    font-weight: bold;
    color: var(--color-high-text);
    padding-left: 8px;
  }

  .goods-info .collect {
    position: absolute;
    right: 10px;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }


</style>