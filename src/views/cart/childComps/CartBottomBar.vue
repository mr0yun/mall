<template>
  <div class="bottom-menu">
    <CheckButton class="select-all" @checkBtnClick="checkBtnClick" v-model="isSelectAll"></CheckButton>
    <span>全选</span>
    <span class="total-price">合计: ¥{{cartTotalPrice}}</span>
    <span class="buy-product">去计算({{cartCount}})</span>
  </div>
</template>

<script>
  import CheckButton from './CheckButton'
  import {mapGetters} from 'vuex'
  import {CART_TOTAL_PRICE, CART_SELECT_ALL, CART_COUNT, SELECT_ALL, SELECT_NONE} from '@/store/mutation-types'

	export default {
		name: "CartBottomBar",
    components: {
		  CheckButton
    },
    computed: {
      ...mapGetters([CART_TOTAL_PRICE, CART_SELECT_ALL, CART_COUNT]),
      isSelectAll() {
        return this.cartSelectAll === undefined;
      }
    },
    methods: {
      checkBtnClick() {
        // 1.判断是否有未选中的按钮
        let isSelectAll = this.cartSelectAll;

        // 2.有未选中的内容, 则全部选中
        if (isSelectAll) {
          this.$store.commit(SELECT_ALL);
        } else {
          this.$store.commit(SELECT_NONE);
        }
      }
    }
	}
</script>

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 2.75rem;
    /* background-color: #eee; */
    background-color: white;
    position: fixed;
    bottom: 50px;
    left: 0;
    box-shadow: 0 -1px 2px lightgray;
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: var(--color-high-text);
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>
