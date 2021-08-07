<template>
  <div class="cart-list">
    <cart-list-item v-for="(item, index) in cartList" :key="index" :product="item" />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { CART_LIST } from '@/store/mutation-types'

import CartListItem from './CartListItem'
export default {
  name: 'CartList',
  computed:{
    ...mapGetters([
      CART_LIST
    ])
  },
  components:{
    CartListItem
  },
}
</script>

<style scoped>
  
</style>