import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import Breadcrum from '../components/breadcrums/breadcrum';
import Productdisplay from '../components/productdisplay/productdisplay'
import DescriptionBox from '../components/descriptionbox/descriptionbox';
import Relatedproducts from '../components/relatedproducts/relatedproduct';
const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productID } = useParams();
  const product = all_product.find((e) => e.id === Number(productID));

  return (
    <div>
      <Breadcrum product={product} />
      <Productdisplay product={product}/>
      <DescriptionBox/>
      <Relatedproducts/>
    </div>
  );
};

export default Product;