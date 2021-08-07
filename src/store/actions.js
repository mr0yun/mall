import { ADD_CART, ADD_COUNTER, ADD_TO_CART } from "./mutation-types";
export default {
  [ADD_CART](context, payLoad) {
    return new Promise((resolve, reject) => {
      let isAdd = false;
      for (let i in context.state.cartList) {
        if (context.state.cartList[i].iid === payLoad.iid) {
          context.commit(ADD_COUNTER, i);
          isAdd = true;
          resolve('该商品已在购物车。');
          break;
        }
      }
      if (!isAdd) {
        context.commit(ADD_TO_CART, payLoad);
        resolve('添加成功！');
      }
    });
  }

}