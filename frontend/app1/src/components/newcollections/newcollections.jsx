import React from 'react';
import './newcollections.css';
import New_collections from '../assets/new_collections';
import Item from '../item/item';
const newcollections = () => {
    return (
        <div className='newcollections'>
            <h1>NEW COLLECTIONS</h1>
            <hr/>
            <div className="collections">
                {New_collections.map((item,index)=>{
                    return  <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                
                })}


            </div>
        </div>
    );
};

export default newcollections;