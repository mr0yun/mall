<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addToCart() {
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>
  .bottom-bar{
    height: 3rem;
    width: 100%;
    background: white;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 15;
    display: flex;
    text-align: center;
    /* box-shadow: 0 -1px 1px rgb(224, 224, 224); */
  }

  .bar-item {
    flex: 1;
    display: flex;
  }

  .bar-item>div {
    flex: 1;
  }

  .bar-left .text {
    font-size: 0.8rem;
  }

  .bar-left .icon {
    display: block;
    width: 20px;
    height: 20px;
    margin: 10px auto 0px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }

  .bar-left .service {
    background-position:0 -48px;
  }

  .bar-left .shop {
    background-position:0 -90px;
  }

  .bar-right {
    font-size: 0.9rem;
    color: #fff;
    line-height: 3rem;
  }

  .bar-right .cart {
    background-color: #ffe817;
    color: #333;
  }

  .bar-right .buy {
    background-color: rgb(255, 111, 55);
    /* background-color: var(--color-high-text); */
  }
</style>