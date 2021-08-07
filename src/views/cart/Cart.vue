<template>
  <div class="cart">
    <nav-bar class="cart-nav"><div slot="center">购物车({{cartLength}})</div></nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

import {mapGetters} from 'vuex'
import { CART_LENGTH } from '@/store/mutation-types'
export default {
  name: 'Cart',
  components:{
    NavBar,
    CartList,
    Scroll,
    CartBottomBar
  },
  computed:{
    ...mapGetters([
      CART_LENGTH
    ])
  },
  activated() {
    this.$refs.scroll.scroll.refresh();
  },
}
</script>

<style scoped>
  .cart{
    overflow: hidden;
    position: relative;
    height: 100vh;
  }
  .cart-nav{
    font-size: 1.125rem;
    background-color: var(--color-tint);
    color: white;
    box-shadow: 0 1.5px 1px rgb(90, 90, 90);
  }

  .content{
    /* height: calc(100% - 44px); */
    position:absolute;
    top: 2.85rem;
    bottom: 5.75rem;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>