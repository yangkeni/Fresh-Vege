import { ProductActionType } from 'type';
import { findIndex } from 'lodash';

const initialState = {
  shoppingProducts: [],
};

const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductActionType.GetShopping:
      // 获取本地化购物信息
      state.shoppingProducts = action.shoppingProducts;
      return { ...state };
    case ProductActionType.Shopping:
      // 购物车商品个数通信
      const productIndex = findIndex(state.shoppingProducts, {
        id: action.shoppingProducts.id,
      });
      if (productIndex === -1) {
        state.shoppingProducts.push(action.shoppingProducts);
      } else {
        state.shoppingProducts[productIndex].amount +=
          action.shoppingProducts.amount;
      }
      // 更新state
      state.shoppingProducts = [...state.shoppingProducts];
      localStorage.setItem(
        'shoppingProducts',
        JSON.stringify(state.shoppingProducts)
      );
      return { ...state };
    default:
      return state;
  }
};
export default shoppingReducer;
