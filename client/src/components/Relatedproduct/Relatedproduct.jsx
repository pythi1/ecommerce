import React from 'react'
import "./relatedproduct.css";
import data_product from '../Assets/data';
import Item from '../Item/Item';

const Relatedproduct = () => {
    return (
        <div className='relatedproduct' >
            <h1>Related Product </h1>
            <hr />

            <div className='relatedproducts-item' >
                {data_product.map((item, i) => {
                    return (
                        <Item
                            key={i}
                            id={item.id}
                            image={item.Image}
                            name={item.name}
                            new_price={item.new_price}
                            old_price={item.old_price}

                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Relatedproduct