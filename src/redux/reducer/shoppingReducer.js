import { ProductActionType } from 'type';
import { findIndex, pull, remove } from 'lodash';

const initialState = {
  shoppingProducts: [],
};

const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductActionType.GetShopping:
      // 获取本地化购物信息
      state.shoppingProducts = action.shoppingProducts;
      return { ...state };
    case ProductActionType.ShoppingAmountUpdate:
      // 获取节流后的购物数量信息
      const cartProductIndex = findIndex(state.shoppingProducts, {
        id: action.shoppingProducts.id,
      });
      if (cartProductIndex === -1) {
        state.shoppingProducts.push(action.shoppingProducts);
      } else {
        state.shoppingProducts[cartProductIndex].amount =
          action.shoppingProducts.amount;
      }
      // 更新state
      state.shoppingProducts = [...state.shoppingProducts];
      localStorage.setItem(
        'shoppingProducts',
        JSON.stringify(state.shoppingProducts)
      );
      return { ...state };
    case ProductActionType.DeleteShoppingProduct:
      // 删除购物车商品
      remove(state.shoppingProducts, 
        { id: action.deleteProduct.id }
      );
      // 更新state
      state.shoppingProducts = [...state.shoppingProducts];
      localStorage.setItem(
        'shoppingProducts',
        JSON.stringify(state.shoppingProducts)
      );
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
