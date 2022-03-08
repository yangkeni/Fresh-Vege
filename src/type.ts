export enum ProductEnum {
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
  products = 'GET_PRODUCTS',
}
