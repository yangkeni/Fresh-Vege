import React, { FC, useEffect } from "react";
import RouterMap from "router/RouterMap";
import "./App.css";
import { testProductsInfo } from "testData/dataProducts";
import { connect } from "react-redux";
import { ProductActionType, ProductsProps } from "type";
import Header from "pages/header/Header";
import Footer from "pages/footer/Footer";

interface AppProps {}

interface AppState {
  count: number;
}

const App: FC<AppProps> = () => {
  useEffect(() => {
    !localStorage.getItem("productsInfo") &&
      localStorage.setItem("productsInfo", JSON.stringify(testProductsInfo));
  }, []);

  return (
    <div className="App">
      <Header />
      <RouterMap />
      <Footer />
    </div>
  );
};

const mapDispatchToProps = {
  getProductsInfo: (listProducts: ProductsProps) => {
    return {
      type: ProductActionType.products,
      listProducts,
    };
  },
};

export default connect(null, mapDispatchToProps)(App);
