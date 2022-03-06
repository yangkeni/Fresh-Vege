const initialState = {
    listProducts:{}
}

const listProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCT':
      state.listProducts = action.listProducts;
      return { ...state };
    default:
      return state;
  }
}
export default listProductReducer;