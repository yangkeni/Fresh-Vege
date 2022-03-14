import NormalBreadcrumb from 'components/NormalBreadcrumb/NormalBreadcrumb';
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

interface ProductDetailProps {
    // productId: string
}

const ProductDetail: FC<ProductDetailProps> = ({
    // productId
}) => {
    const id = useParams();
    console.log(id)
    return <>
    {/* <NormalBreadcrumb  />
     */}
        <div>aaaasdkjafiokl</div>
    </>;
};

export default ProductDetail;