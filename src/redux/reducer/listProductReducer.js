import { ProductActionType } from "type";

const initialState = {
    listProducts:{}
}

const listProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductActionType.Products:
      state.listProducts = action.listProducts;
      return { ...state };
    default:
      return state;
  }
}
export default listProductReducer;