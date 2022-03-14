import React, { FC, useEffect } from 'react';
import RouterMap from 'router/RouterMap';
import { testProductsInfo } from 'testData/dataProducts';
import { useDispatch } from 'react-redux';
import { ProductActionType } from 'type';
import Header from 'pages/header/Header';
import Footer from 'pages/footer/Footer';
import './App.css';

const App: FC<{}> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // 初始化，将本地数据拉进来
    // 商品信息初始化
    if (!localStorage.getItem('productsInfo')) {
      localStorage.setItem('productsInfo', JSON.stringify(testProductsInfo));
    }
    const listProducts = JSON.parse(
      localStorage.getItem('productsInfo') as string
    );
    dispatch({
      type: ProductActionType.Products,
      listProducts,
    });
    // 购物车信息初始化
    if (!localStorage.getItem('shoppingProducts')) {
      localStorage.setItem('shoppingProducts', JSON.stringify([]));
    }
    const shoppingProducts = JSON.parse(
      localStorage.getItem('shoppingProducts') as string
    );
    dispatch({
      type: ProductActionType.GetShopping,
      shoppingProducts,
    });
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <RouterMap />
      <Footer />
    </div>
  );
};

export default App;
