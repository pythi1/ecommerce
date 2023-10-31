import React, { useContext } from 'react';
import "./productdisplay.css"
import FilledStarIcon from '@mui/icons-material/StarOutlined';
import HollowStardIcon from '@mui/icons-material/StarBorderOutlined';
import { Shopcontext } from '../../context/shopcontext';

const ProductDisplay = (props) => {

    const {product } = props;

    const {AddtoCart} = useContext(Shopcontext);
 
    return (
        <div className='productdisplay' >

            <div className='productdisplay-left' >
                <div className='productdisplay-img-list'>
                    <img src={product.image} alt=' ' />
                    <img src={product.image} alt=' ' />
                    <img src={product.image} alt=' ' />
                    <img src={product.image} alt=' ' />
                </div>

                <div className='productdisplay-img' >
                    <img className='productdisplay-main-img' src={product.image} alt=' ' />

                </div>
            </div>

            <div className='productdisplay-right' >
                <h1>{product.name}</h1>
                <div className='productdisplay-right-star' >
                    < FilledStarIcon />
                    < FilledStarIcon />
                    < FilledStarIcon />
                    < FilledStarIcon />
                    < HollowStardIcon />
                 

                    <p>(178)</p>

                </div>


                <div className='productdisplay-right-prices' >
                    <div className='productdisplay-right-price-old' >
                            ${product.old_price}
                    </div>

                    <div className='productdisplay-right-price-new' >
                            ${product.new_price}
                    </div>
                </div>

                <div className='productdiplay-right-description' >
                        hello this is the product i weann asell achha hota to bik hi jata , tu hi kharid lena yaar pleaase hath jod rahr ahun lele na yaar......                        
                </div>

                <div className='productdisplay-right-size' >
                    <h1>Select Size</h1>
                    <div className='productdisplay-right-sizes' >
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>

                    </div>
                </div>

                <button onClick={() => {AddtoCart(product.id)}} >ADD TO CART</button>

                <p className='productdisplay-right-category' > <span>Category : </span> Women tshirt , crop-top </p>
                <p className='productdisplay-right-category' > <span>Category : </span> modern latest </p>

            </div>
        </div>
    )
}

export default ProductDisplay