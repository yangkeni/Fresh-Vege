import ProductCard from 'components/ProductCard/ProductCard';
import ShoppingModal from 'components/ShoppingModal/ShoppingModal';
import React, { FC, useState } from 'react';
import Banner from './banner/Banner';
import './style.scss';

const Home: FC<{}> = ({}) => {
  const [shoppingShow, setShoppingShow] = useState(false);
  return (
    <div>
      <Banner />
      <div className="test">
        <ProductCard
          imgSrc="image/product-image/fruit/peach.webp"
          name="水蜜桃"
          price={55}
          basePrice={1000}
          setShoppingState={setShoppingShow}
        />
        <ProductCard
          imgSrc="image/product-image/fruit/orange.webp"
          name="橘子"
          price={55}
          basePrice={1000}
          setShoppingState={setShoppingShow}
        />
        <ProductCard
          imgSrc="image/product-image/fruit/strawberry.webp"
          name="草莓"
          price={55}
          basePrice={1000}
          setShoppingState={setShoppingShow}
        />
        <ProductCard
          imgSrc="image/product-image/fruit/greenApple.webp"
          name="青苹果"
          price={55}
          basePrice={1000}
          setShoppingState={setShoppingShow}
        />
      </div>
      <ShoppingModal showState={shoppingShow} setShowState={setShoppingShow} />
    </div>
  );
};

export default Home;
