import { ADD_COUNTER, ADD_TO_CART, SELECT_ALL, SELECT_NONE, REMOVE_ITEM } from './mutation-types'
export default {
  [ADD_COUNTER](state, payload) {
    state.cartList[payload].count++;
  },
  [ADD_TO_CART](state, payload) {
    state.cartList.push(payload);
  },
  [SELECT_ALL](state) {
    state.cartList.forEach(element => {
      element.checked = true;
    });
  },
  [SELECT_NONE](state) {
    state.cartList.forEach(element => {
      element.checked = false;
    });
  },
  [REMOVE_ITEM](state, payload) {
    let index = state.cartList.indexOf(payload);
    if (index !== -1) {
      state.cartList.splice(index, 1);
    }
  }
}