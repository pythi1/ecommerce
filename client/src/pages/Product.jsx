import React, { useContext } from 'react'
import { Shopcontext } from '../context/shopcontext';
import { useParams } from 'react-router-dom';
import BreadCrums from '../components/breadcrums/BreadCrums';
import ProductDisplay from '../components/productdisplay/ProductDisplay';
import Description from '../components/Description/Description';
import Relatedproduct from '../components/Relatedproduct/Relatedproduct';

const Product = () => {

  const { all_product } = useContext(Shopcontext);

  const {productId} = useParams();

  const product = all_product.find((event) => {
    return (
      event.id === Number(productId)
  
    );
  });

  console.log(product.name);

  return (
    <div>
      <BreadCrums product={product} />

      <ProductDisplay product={product} />

      <Description />

      <Relatedproduct />

    </div>
  )
}

export default Product;