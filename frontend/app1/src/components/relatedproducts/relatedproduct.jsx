import React from 'react';
import './relatedproduct.css';
import data_product from '../assets/data';
import Item from '../item/item';
const relatedproduct = () => {
    return (
        <div className='relatedproducts'>
           <h1>Related products</h1> 
           <hr/>
           <div className='relatedproductcs-item'>
            {data_product.map((item,index)=>{
                return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

            })}
           </div>

        </div>
    );
};

export default relatedproduct;