import { CART_LENGTH, CART_LIST, CART_TOTAL_PRICE, CART_COUNT, CART_SELECT_ALL } from './mutation-types'
export default {
  [CART_LENGTH](state) {
    return state.cartList.length;
  },
  [CART_LIST](state) {
    return state.cartList;
  },
  [CART_COUNT](state) {
    return state.cartList.filter(cur => cur.checked).length;
  },
  [CART_TOTAL_PRICE](state) {
    if (state.cartList.length === 0) {
      return 0;
    } else {
      return state.cartList.filter(cur => cur.checked).reduce((pre, cur) => pre + cur.count * cur.price, 0).toFixed(2)
    }
  },
  [CART_SELECT_ALL](state) {
    return state.cartList.find(cur => !cur.checked);
  }
}