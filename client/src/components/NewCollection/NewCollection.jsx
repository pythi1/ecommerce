import React from 'react';
import "./newcollection.css"
import New_collections from '../Assets/new_collection';
import Item from '../Item/Item';


const NewCollection = () => {
  return (
    <div className='new-collection' >
        <h1>NEW COLLECTION</h1>
        <hr />
        <div className='collections' >
            { New_collections.map((item,i) => {
                return(
                    <Item 
                        key={i}
                        id={item.id}
                        image={item.Image}
                        name={item.name}
                        new_price={item.new_price}
                        old_price={item.old_price}

                    />

                )
            } )}

        </div>

    </div>
  )
}

export default NewCollection;