import React, { useContext } from 'react'
import "./CSS/shopcategory.css"
import { Shopcontext } from '../context/shopcontext'
import DropDownIcon from '@mui/icons-material/ArrowDropDownOutlined';
import Item from '../components/Item/Item';
// import all_product from '../components/Assets/allproduct';

const ShopCategory = (props) => {

  const { all_product } = useContext(Shopcontext)

  return (
    <div className='shop-category' >
      <img className='shop-category-banner' src={props.banner} alt='banner' />

      <div className='shopcategory-indexsort' >
        <p>
          <span>Showing 1 - 10 </span> out of 20 products
        </p>

        <div className='shopcategory-sort' >
          sort by <DropDownIcon />

        </div>
      </div>

      <div className='shop-category-products' >
        {all_product.map((item , index) => {
          if (props.category === item.category) {
            return (
              <Item
                key={index}
                id={item.id}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}

              />
            )
          }
          else {
            return null;
          }
        })}

      </div>

      <div className='shopcategory-loadmore' >
        explore more...
      </div>

    </div>
  )
}

export default ShopCategory;