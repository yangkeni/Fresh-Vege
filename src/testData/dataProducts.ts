import { ProductEnum, ProductsProps } from 'type';
export const testProductsInfo: ProductsProps = {
  navPills: [
    { tabName: ProductEnum.Fruit, showName: '水果' },
    { tabName: ProductEnum.Seafood, showName: '海鲜' },
    { tabName: ProductEnum.Nut, showName: '坚果' },
    { tabName: ProductEnum.Vegetable, showName: '鲜蔬' },
    { tabName: ProductEnum.FreshMeat, showName: '鲜肉' },
  ],
  tabPanes: [
    {
      id: 1,
      name: '美国水晶葡萄',
      price: 89.8,
      basePrice: 129.9,
      image: '/image/product-image/fruit/grape.webp',
      type: ProductEnum.Fruit,
    },
    {
      id: 2,
      name: '泰国进口蜜瓜',
      price: 48.8,
      basePrice: 64.9,
      image: '/image/product-image/fruit/melon.webp',
      type: ProductEnum.Fruit,
    },
    {
      id: 3,
      name: '莆仙妃子笑荔枝',
      price: 78,
      basePrice: 98,
      image: '/image/product-image/fruit/litchi.webp',
      type: ProductEnum.Fruit,
    },
    {
      id: 4,
      name: '澳洲水蜜桃',
      price: 79.9,
      basePrice: 99.9,
      image: '/image/product-image/fruit/peach.webp',
      type: ProductEnum.Fruit,
    },
    {
      id: 5,
      name: '丹东奶油草莓',
      price: 59.9,
      basePrice: 89.9,
      image: '/image/product-image/fruit/strawberry.webp',
      type: ProductEnum.Fruit,
    },
    {
      id: 6,
      name: '王林青苹果',
      price: 36.8,
      image: '/image/product-image/fruit/greenApple.webp',
      type: ProductEnum.Fruit,
    },
    {
      id: 7,
      name: '霓虹鳟鱼',
      price: 81.5,
      image: '/image/product-image/seafood/rout.webp',
      type: ProductEnum.Seafood,
    },
    {
      id: 8,
      name: '想不出名虾',
      price: 39.9,
      basePrice: 49.8,
      image: '/image/product-image/seafood/shrimp.webp',
      type: ProductEnum.Seafood,
    },
    {
      id: 9,
      name: '海边小乌贼',
      price: 48.6,
      image: '/image/product-image/seafood/squid.webp',
      type: ProductEnum.Seafood,
    },
    {
      id: 10,
      name: '普通的螃蟹',
      price: 79.9,
      image: '/image/product-image/seafood/crab.webp',
      type: ProductEnum.Seafood,
    },
    {
      id: 11,
      name: '霓虹三文鱼',
      price: 260.9,
      basePrice: 499.9,
      image: '/image/product-image/seafood/salmon.webp',
      type: ProductEnum.Seafood,
    },
    {
      id: 12,
      name: '腰果',
      price: 56.3,
      image: '/image/product-image/nut/cashew.webp',
      type: ProductEnum.Nut,
    },
    {
      id: 13,
      name: '核桃',
      price: 76.9,
      image: '/image/product-image/nut/walnut.webp',
      type: ProductEnum.Nut,
    },
    {
      id: 14,
      name: '开心果',
      price: 46.4,
      basePrice: 49.9,
      image: '/image/product-image/nut/pistachio.webp',
      type: ProductEnum.Nut,
    },
    {
      id: 15,
      name: '杏仁',
      price: 42.9,
      image: '/image/product-image/nut/almond.webp',
      type: ProductEnum.Nut,
    },
    {
      id: 16,
      name: '青柠檬',
      price: 12.4,
      image: '/image/product-image/vegetable/lemon.webp',
      type: ProductEnum.Vegetable,
    },
    {
      id: 18,
      name: '洋葱',
      price: 6.9,
      image: '/image/product-image/vegetable/onion.webp',
      type: ProductEnum.Vegetable,
    },
    {
      id: 19,
      name: '菜花',
      price: 4.9,
      basePrice: 9.9,
      image: '/image/product-image/vegetable/cauliflower.webp',
      type: ProductEnum.Vegetable,
    },
    {
      id: 20,
      name: '里脊肉',
      price: 48.6,
      image: '/image/product-image/freshMeat/fillet.webp',
      type: ProductEnum.FreshMeat,
    },
    {
      id: 21,
      name: '进口加拿大牛肉',
      price: 124.6,
      basePrice: 198.9,
      image: '/image/product-image/freshMeat/CanadaBeef.webp',
      type: ProductEnum.FreshMeat,
    },
    {
      id: 22,
      name: '美国不好吃牛肉',
      price: 39.9,
      basePrice: 69.9,
      image: '/image/product-image/freshMeat/USABeef.webp',
      type: ProductEnum.FreshMeat,
    },
    {
      id: 23,
      name: '不知道啥肉',
      price: 49.9,
      image: '/image/product-image/freshMeat/dkMeat.webp',
      type: ProductEnum.FreshMeat,
    },
    {
      id: 24,
      name: '巴西猪肋骨',
      price: 89.9,
      image: '/image/product-image/freshMeat/BrazilRib.webp',
      type: ProductEnum.FreshMeat,
    },
    {
      id: 25,
      name: '霓虹神户和牛',
      price: 1299.9,
      image: '/image/product-image/freshMeat/wagyu.webp',
      type: ProductEnum.FreshMeat,
    },
  ],
};
