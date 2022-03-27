export enum ProductEnum {
  All = 'all',
  Fruit = 'fruit',
  Seafood = 'seafood',
  Nut = 'nut',
  Vegetable = 'vegetable',
  FreshMeat = 'freshMeat',
}

export type ProductInfo = {
  id: number;
  name: string;
  price: number;
  image: string;
  type: ProductEnum;
  basePrice?: number;
};

export type ProductsProps = {
  navPills: {
    tabName: ProductEnum;
    showName: string;
  }[];
  tabPanes: ProductInfo[];
};

export enum ProductActionType {
  Products = 'GET_PRODUCTS', // 获取本地化的商品信息
  Shopping = 'GO_SHOPPING', // 购物操作带来的数据变化信息
  GetShopping = 'GET_SHOPPING', // 获取本地化的购物信息
  ShoppingAmountUpdate = 'UPDATE_SHOPPING_AMOUNT', // 更新购物车商品的数量变化
  DeleteShoppingProduct = 'DELETE_SHOPPING_PRODUCT', // 删除购物车商品信息
}
