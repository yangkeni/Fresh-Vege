import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { ProductEnum, ProductsProps } from 'type';
import { get } from "lodash";
import Banner from './banner/Banner';
import ListProducts from 'components/ListProducts/ListProducts';
import './style.scss';
import CapsuleSelect from 'components/CapsuleSelect/CapsuleSelect';
import SectionDivider from './sectionDivider/SectionDivider';

interface HomeProps {
  listProductsData?: ProductsProps;
}

const Home: FC<HomeProps> = ({
  listProductsData
}) => {
  const [productType, setProductType] = useState(ProductEnum.Fruit);
  const listProducts = useSelector(state => get(state, 'listProductReducer.listProducts', listProductsData)) as ProductsProps;

  const onTitleClick = () => {

  }

  return (
    <>
      <Banner />
      <SectionDivider title='市场总览' onClick={onTitleClick} />
      <CapsuleSelect selectData={listProducts.navPills} productType={productType} setProductType={setProductType} />
      <ListProducts productType={productType} listProductsInfo={get(listProducts, 'tabPanes')}/>
    </>
  );
};

export default Home;
