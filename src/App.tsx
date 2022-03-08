import React, { FC, useEffect } from 'react';
import RouterMap from 'router/RouterMap';
import './App.css';
import { testProductsInfo } from 'testData/dataProducts';
import { connect, useDispatch } from 'react-redux';
import { ProductActionType, ProductsProps } from 'type';
import Header from 'pages/header/Header';
import Footer from 'pages/footer/Footer';

interface AppProps {}

interface AppState {
  count: number;
}

const App: FC<{}> = ({}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.getItem('productsInfo')) {
      localStorage.setItem('productsInfo', JSON.stringify(testProductsInfo));
    }
    const listProducts = JSON.parse(
      localStorage.getItem('productsInfo') as string
    );
    dispatch({
      type: ProductActionType.products,
      listProducts,
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <RouterMap />
      <Footer />
    </div>
  );
};

export default App;
