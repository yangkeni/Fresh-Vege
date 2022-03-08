import ProductCard from 'components/ProductCard/ProductCard';
import ShoppingModal from 'components/ShoppingModal/ShoppingModal';
import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { ProductInfo, ProductsProps } from 'type';
import Banner from './banner/Banner';
import { get } from "lodash";
import './style.scss';

const Home: FC<{}> = ({}) => {
  const [shoppingShow, setShoppingShow] = useState(false);
  const [shoppingProductInfo, setShoppingProductInfo] = useState<ProductInfo>();
  const listProducts = useSelector(state => get(state, 'listProductReducer.listProducts')) as ProductsProps;
  return (
    <div>
      <Banner />
      <div className="test">
        {
          listProducts.tabPanes?.map((val, index) => { return index < 4 && (<ProductCard
            productInfo={val}
            setShoppingProductInfo={setShoppingProductInfo}
            setShoppingState={setShoppingShow}
          />) })
        }
        
      </div>
      <ShoppingModal showState={shoppingShow} shoppingProductInfo={shoppingProductInfo} setShowState={setShoppingShow} />
    </div>
  );
};

export default Home;
