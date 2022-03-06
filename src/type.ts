export enum ProductEnum {
  Fruit = "fruit",
  Seafood = "seafood",
  Nut = "nut",
  Vegetable = "vegetable",
  FreshMeat = "freshMeat",
}

export type ProductsProps = {
  navPills: {
    tabName: ProductEnum;
    showName: string;
  }[];
  tabPanes: {
    id: number;
    name: string;
    price: number;
    image: string;
    type: ProductEnum;
  }[];
};

export enum ProductActionType {
  products = "GET_PRODUCTS",
}
